import { Component,ViewChild } from '@angular/core';
import {MyserService} from '../services/myser.service'
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog';
import { DepDelDilogComponent } from './DepDelDilog/DepDelDilog.component';
import { MatSort } from '@angular/material/sort';
import { DepDilogComponent } from './DepDilog/DepDilog.component';

export interface ReqDataType {
  id : number;
  name: string;
}
@Component({
  selector: 'app-dep',
  templateUrl: './dep.component.html',
  styleUrls: ['./dep.component.css']
})
export class DepComponent {

    constructor(
      private _depser : MyserService,
      private _dilog: MatDialog
      ) 
      {}
    @ViewChild(MatPaginator) _matpage!: MatPaginator;

    @ViewChild(MatSort) sort !: MatSort;
    
    department!: MatTableDataSource<any>;

    ngOnInit(){
      this.getDepartmentList();
      if(this.department){ 
        this.department.paginator = this._matpage;
        this.department.sort = this.sort;
      }
    }
    displayedColumns: string[] = ['name', 'action'];

    openAddForm() {
      const dialogRef = this._dilog.open(DepDilogComponent);
      dialogRef.afterClosed().subscribe({
        next: (val) => {
          if (val) {
            this.getDepartmentList();
          }
        },
      });
    }
    openEditForm(data:any){
      const dialogRef = this._dilog.open(DepDilogComponent,{
        data : data
      });
      dialogRef.afterClosed().subscribe({
        next:(val)=>{
          if(val){
            this.getDepartmentList();
          }
        }
      });
    }
    getDepartmentList() {
      this._depser.getDepartment().subscribe({
        next: (res) => {
          this.department = new MatTableDataSource(res as any);
          this.department.paginator = this._matpage;
          this.department.sort = this.sort;
        },
        error: (err) => {
          alert("Server error: " + err.message);
          
        },
      });
    }

    openDelete(data:any){
      const dialogRef =  this._dilog.open(DepDelDilogComponent, {
        data : data      
      });
      dialogRef.afterClosed().subscribe({
        next: (val) => {
          if (val) {
            this.getDepartmentList();
          }
        },
      });
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.department.filter = filterValue.trim().toLowerCase();
  
      if (this.department.paginator) {
        this.department.paginator.firstPage();
      }
    }
}
