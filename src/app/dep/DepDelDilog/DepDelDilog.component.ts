import { Component, OnInit, Inject} from '@angular/core';
import { MyserService } from 'src/app/services/myser.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-DepDelDilog',
  templateUrl: './DepDelDilog.component.html',
  styleUrls: ['./DepDelDilog.component.css']
})
export class DepDelDilogComponent implements OnInit {

  constructor(
    private _empser : MyserService,
    private _dilogref : MatDialogRef<DepDelDilogComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any
  ) 
  { }

  ngOnInit() {
  }
  deleteDep(){
    console.log(this.data)
    this._empser.deleteDep(this.data).subscribe({
      next : (val : any)=>{
        alert("Department Deleted Successfully");
        this._dilogref.close(true);
      },
      error : (err : any)=>{
        console.error(err)
      }
    })
  }
}
