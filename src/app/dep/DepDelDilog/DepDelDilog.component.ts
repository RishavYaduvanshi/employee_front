import { Component, OnInit, Inject} from '@angular/core';
import { MyserService } from 'src/app/services/myser.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-DepDelDilog',
  templateUrl: './DepDelDilog.component.html',
  styleUrls: ['./DepDelDilog.component.css']
})
export class DepDelDilogComponent implements OnInit {

  deldepName : string = this.data.name;
  constructor(
    private _empser : MyserService,
    private toast : NgToastService  ,
    private _dilogref : MatDialogRef<DepDelDilogComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any
  ) 
  { }

  ngOnInit() {
  }
  deleteDep(){
    this._empser.deleteDep(this.data.id).subscribe({
      next : (val : any)=>{
        this.toast.success({detail : "Department Deleted Successfully",duration : 5000});
        this._dilogref.close(true);
      },
      error : (err : any)=>{
        this.toast.error({detail : "Server error: " + err.error,duration : 5000});
        console.error(err)
      }
    })
  }
}
