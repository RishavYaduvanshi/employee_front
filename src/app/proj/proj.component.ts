import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MyserService } from '../services/myser.service';
import { ProjDilogComponent } from './projDilog/projDilog.component';
import { ProjDelComponent } from './projDel/projDel.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-proj',
  templateUrl: './proj.component.html',
  styleUrls: ['./proj.component.css']
})
export class ProjComponent implements OnInit {

  constructor(
    private _projserv: MyserService,
    private _dilog: MatDialog,
    private router: Router
  ) 
  { }

  @ViewChild(MatPaginator) _matpage!: MatPaginator;

  @ViewChild(MatSort) sort !: MatSort;
  

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/signin']);
    }
    this.getProjectList();
    if(this.project){
      this.project.paginator = this._matpage;
      this.project.sort = this.sort;
    }
  }
  project!: MatTableDataSource<any>;
  displayedColumns: string[] = ['pName', 'pDescription', 'action'];

  getProjectList() {
   
    this._projserv.getProjList().subscribe((data: any) => {
      this.project = new MatTableDataSource(data);
      // console.log(data);
      this.project.paginator = this._matpage;
      this.project.sort = this.sort;
    })
  }

  openAddForm() {
    const dialogRef = this._dilog.open(ProjDilogComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getProjectList();
        }
      },
    });
  }
  openEditForm(data:any){
    const dialogRef = this._dilog.open(ProjDilogComponent,{
      data : data
    });
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getProjectList();
        }
      }
    });
  }

  openDelete(data:any){
    const dialogRef =  this._dilog.open(ProjDelComponent, {
      data : data      
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getProjectList();
        }
      },
    });
  }

  noDataFound = false;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.project.filter = filterValue.trim().toLowerCase();

    if (this.project.paginator) {
      this.project.paginator.firstPage();
    }

    // Check if the filtered data is empty
    if (this.project.filteredData.length === 0) {
      this.noDataFound = true;
    } else {
      this.noDataFound = false;
    }
  }

  isAdminUser() {
    const user = localStorage.getItem('user');
    if(user === 'admin') {
      return true;
    }
    return false;
  }
}
