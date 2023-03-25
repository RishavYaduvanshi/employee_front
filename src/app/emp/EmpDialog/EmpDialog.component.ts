import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserService } from '../../services/myser.service';



@Component({
  selector: 'app-EmpDialog',
  templateUrl: './EmpDialog.component.html',
  styleUrls: ['./EmpDialog.component.css']
})
export class EmpDialogComponent implements OnInit {

  empForm: FormGroup;
  departments: string[] = [];
  submitted = false;
  selecteddepartment = 'Java';
  constructor(
    private _fb: FormBuilder,
    private _empser: MyserService,

    @Inject(MAT_DIALOG_DATA) public data: any,

    private _dilogref: MatDialogRef<EmpDialogComponent>) {
    this.empForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNumber: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])],
      email: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9.]+@[a-zA-Z0-9]+\\.[a-zA-Z]+')])],
      departmentName: ['', Validators.required],
    });
  }

  getDepartmentName() {
    this._empser.getDepartment().subscribe({
      next: (val: any) => {
        this.departments = val.map((item: any) => item.name);
        this.selecteddepartment = this.data.department.name;
        console.log(this.departments);
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }

  onFormSubmit() {
    this.submitted = true;
    if (this.empForm.valid) {
      if (this.data) {
        this._empser.updateUser(this.data.id,  this.empForm.value).subscribe({
          next: (val: any) => {
            // alert("Employee Updated Successfully");
            this._dilogref.close(true);
          },
          error: (err: any) => {
            alert("Server error: " + err.error);
            console.error(err)
          }
        })
      }
      else {
        this._empser.addUser(this.empForm.value).subscribe({
          next: (val: any) => {
            // alert("Employee Added Successfully");
            this._dilogref.close(true);
          },
          error: (err: any) => {
            alert(err.error)
            console.error(err)
          }
        })
      }
    }
    else {
      // alert('Fill the data Correctly')
    }
  }
  ngOnInit() {
    this.empForm.patchValue(this.data)
    this.getDepartmentName();
  }
  
  get email() {
    return this.empForm.get('email');
  }
  get firstName() {
    return this.empForm.get('firstName');
  }
  get lastName() {
    return this.empForm.get('lastName');
  }
  get mobileNumber() {
    return this.empForm.get('mobileNumber');
  }
  get departmentName() {
    return this.empForm.get('departmentName');
  }

}



