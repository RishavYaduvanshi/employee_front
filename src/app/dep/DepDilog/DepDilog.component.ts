import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MyserService } from 'src/app/services/myser.service';

@Component({
  selector: 'app-DepDilog',
  templateUrl: './DepDilog.component.html',
  styleUrls: ['./DepDilog.component.css']
})
export class DepDilogComponent implements OnInit {
  depForm: FormGroup;
  submitted = false;

  constructor(
    private _fb: FormBuilder,
    private _depser: MyserService,
    @Inject(MAT_DIALOG_DATA) public data: any,

    private _dilogref: MatDialogRef<DepDilogComponent>
  ) 
  {
    this.depForm = this._fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.depForm.patchValue(this.data)
  }
  onFormSubmit() {
    this.submitted = true;
    if (this.depForm.valid) {
      if (this.data) {
        this._depser.updateDep(this.data.id, this.depForm.value).subscribe({
          next: (val: any) => {
            // alert("Department Updated Successfully");
            this._dilogref.close(true);
          },
          error: (err: any) => {
            alert("Server error: " + err.error);
            console.error(err)
          }
        })
      }
      else {
        this._depser.addDep(this.depForm.value).subscribe({
          next: (val: any) => {
            // alert("Department Added Successfully");
            this._dilogref.close(true);
          },
          error: (err: any) => {
            alert(err.error)
          }
        })
      }
    }
    else{
      
    }
  }
  get depname() {
    return this.depForm.get('name');
  }

}
