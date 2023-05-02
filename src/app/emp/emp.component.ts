import { Component, ViewChild } from '@angular/core';
import { MyserService } from '../services/myser.service'
import { MatDialog } from '@angular/material/dialog';
import { EmpDialogComponent } from './EmpDialog/EmpDialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DelDilogComponent } from './delDilog/delDilog.component';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {

  constructor(
    private _empser: MyserService,
    private _dilog: MatDialog,
    private router: Router
  ) { }
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'mobileNumber', 'department', 'employeeProjects', 'action'];

  @ViewChild(MatPaginator) _matpage!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  ngAfterViewInit() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/signin']);
    }
    if (this.dataSource) {
      this.dataSource.paginator = this._matpage;
      this.dataSource.sort = this.sort;
    }

  }
  
  noDataFound = false;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

    // Check if the filtered data is empty
    if (this.dataSource.filteredData.length === 0) {
      this.noDataFound = true;
    } else {
      this.noDataFound = false;
    }
  }

  ngOnInit() {
    this.getEmployeeList();
  }

  openAddEditForm() {
    const dialogRef = this._dilog.open(EmpDialogComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      },
    });
  }

  getEmployeeList() {
    this._empser.getUser().subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res as any);
        this.dataSource.paginator = this._matpage;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }



  openDelete(data: any) {
    const dialogRef = this._dilog.open(DelDilogComponent, {
      data: data
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      },
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dilog.open(EmpDialogComponent, {
      data: data
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      },
    });
  }
}
