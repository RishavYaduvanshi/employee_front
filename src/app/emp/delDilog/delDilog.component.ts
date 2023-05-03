import { Component, OnInit,Inject } from '@angular/core';
import {MyserService} from '../../services/myser.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-delDilog',
  templateUrl: './delDilog.component.html',
  styleUrls: ['./delDilog.component.css']
})
export class DelDilogComponent implements OnInit {

  constructor(
    private _empser : MyserService,
    private toast : NgToastService  ,
    private _dilogref : MatDialogRef<DelDilogComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any
  ) 
  { }

  ngOnInit() {
  }


  deletemp(){
    console.log(this.data)
    this._empser.deleteUser(this.data).subscribe({
      next : (val : any)=>{
        this.toast.success({detail : "Employee Deleted Successfully",duration : 5000});
        this._dilogref.close(true);
      },
      error : (err : any)=>{
        this.toast.error({detail : "Server error: " + err.error,duration : 5000});
        console.error(err)
      }
    })
  }

}
