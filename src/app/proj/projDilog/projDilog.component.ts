import { Component, OnInit,Inject} from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { MyserService } from 'src/app/services/myser.service';


@Component({
  selector: 'app-projDilog',
  templateUrl: './projDilog.component.html',
  styleUrls: ['./projDilog.component.css']
})
export class ProjDilogComponent implements OnInit {

  projForm : FormGroup;
  submitted = false;
  constructor(
    private _fb: FormBuilder,
    private _projSer: MyserService,
    private toast: NgToastService,
    @Inject(MAT_DIALOG_DATA) public data: any,

    private _dilogref: MatDialogRef<ProjDilogComponent>
  )
  {
    this.projForm = this._fb.group({
      pName: ['', Validators.required],
      pDescription: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.projForm.patchValue(this.data)
  }

  onFormSubmit(){
    this.submitted = true;
    if (this.projForm.valid) {
      if (this.data) {
        console.log(this.data);
        this._projSer.updateProj(this.data.pId, this.projForm.value).subscribe({
          next: (val: any) => {
            this.toast.success({ detail: "Project Updated Successfully", duration: 5000});
            this._dilogref.close(true);
          },
          error: (err: any) => {
            this.toast.error({ detail: "Server error: " + err.error, duration: 5000});
           
          }
        })
      }
      else {
        this._projSer.addProj(this.projForm.value).subscribe({
          next: (val: any) => {
            this.toast.success({ detail: "Project Added Successfully", duration: 5000});
            this._dilogref.close(true);
          },
          error: (err: any) => {
            this.toast.error({ detail: "Server error: " + err.error, duration: 5000});
          }
        })
      }
    }
    else{
      
    }
  }

}
