import { Component,ViewChild } from '@angular/core';
import {MyserService} from '../services/myser.service'
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DepDilogComponent } from './DepDilog/DepDilog.component';
import { MatDialog } from '@angular/material/dialog';
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
      private _dilog: MatDialog) 
      {}
    @ViewChild(MatPaginator) _matpage!: MatPaginator;
    
    department!: MatTableDataSource<any>;

    ngOnInit(){
      this.getDepartmentList();
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

    getDepartmentList() {
      this._depser.getDepartment().subscribe({
        next: (res) => {
          this.department = new MatTableDataSource(res as any);
          this.department.paginator = this._matpage;
        },
        error: (err) => {
          alert("Server error: " + err.message);
          
        },
      });
    }
    
}
