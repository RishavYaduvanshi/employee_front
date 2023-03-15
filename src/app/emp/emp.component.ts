import { Component,ViewChild } from '@angular/core';
import { MyserService } from '../services/myser.service'
import { MatDialog } from '@angular/material/dialog';
import { EmpDialogComponent } from './EmpDialog/EmpDialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DelDilogComponent } from './delDilog/delDilog.component';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {

  constructor(
    private _empser: MyserService, 
    private _dilog: MatDialog) 
    { }
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'email', 'departmentId', 'department', 'action'];

  @ViewChild(MatPaginator) _matpage!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this._matpage;
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
      },
      error: (err) => {
        alert("Server error: " + err.message);
        console.log(err);
      },
    });
  }

  // deleteEmployee(id: number) {
  //   this._empser.deleteUser(id).subscribe((res) => {
  //     alert("Employee deleted !")
  //     this.getEmployeeList();
  //   })
  // }

  openDelete(data:any){
    const dialogRef =  this._dilog.open(DelDilogComponent, {
      data : data      
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      },
    });
  }

  // updateEmployee(id: number, data: any) {
  //   this._empser.updateUser(id, data).subscribe((res) => {
  //     alert("Employee Updated !")
  //     this.getEmployeeList();
  //   })
  // }
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
