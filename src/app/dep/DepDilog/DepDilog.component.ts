import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MyserService } from 'src/app/services/myser.service';

@Component({
  selector: 'app-DepDilog',
  templateUrl: './DepDilog.component.html',
  styleUrls: ['./DepDilog.component.css']
})
export class DepDilogComponent implements OnInit {
  depForm : FormGroup;
  constructor(
    private _fb : FormBuilder, 
    private _depser : MyserService, 
    private _dilogref : MatDialogRef<DepDilogComponent>
  ) {
    this.depForm = this._fb.group({
      name: ''
    });
   }

  ngOnInit() {
  }
  onFormSubmit(){
    this._depser.addDep(this.depForm.value).subscribe({
      next : (val : any)=>{
        alert("Department Added Successfully");
        this._dilogref.close(true);
      },
      error : (err : any)=>{
        alert(err.error)
      }
    })
  }
}
