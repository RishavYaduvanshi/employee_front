import { Component, ViewChild } from '@angular/core';
import { MyserService } from '../services/myser.service'
import { MatDialog } from '@angular/material/dialog';
import { EmpDialogComponent } from './EmpDialog/EmpDialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DelDilogComponent } from './delDilog/delDilog.component';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {

  constructor(
    private _empser: MyserService,
    private _dilog: MatDialog,
  ) { }
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'mobileNumber', 'department', 'action'];

  @ViewChild(MatPaginator) _matpage!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this._matpage;
      this.dataSource.sort = this.sort;
    }

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
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
        this.dataSource = new MatTableDataSource(res as any);
        this.dataSource.paginator = this._matpage;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert("Server error: " + err.message);
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
