import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserService } from '../../services/myser.service';
import { MatCheckboxChange } from '@angular/material/checkbox'
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-EmpDialog',
  templateUrl: './EmpDialog.component.html',
  styleUrls: ['./EmpDialog.component.css']
})
export class EmpDialogComponent implements OnInit {

  empForm: FormGroup;

  departments: string[] = [];
  projects: any[] = [];
  submitted = false;
  selecteddepartment = '';
  selectedProjects: any[] = [];


  constructor(
    private _fb: FormBuilder,
    private _empser: MyserService,
    private toast: NgToastService,
    @Inject(MAT_DIALOG_DATA) public data: any,

    private _dilogref: MatDialogRef<EmpDialogComponent>) {
      this.empForm = this._fb.group({
        firstName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]+'), Validators.minLength(3)])],
        lastName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]+'), Validators.minLength(3)])],
        mobileNumber: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])],
        email: ['', Validators.compose([Validators.required, Validators.pattern('[a-z-0-9.]+@[a-z-0-9]+\\.[a-zA-Z]+')])],
        departmentName: ['', Validators.required],
        ProjectIds: [''],
      });
  }

  

  getDepartmentName() {
    this._empser.getDepartment().subscribe({
      next: (val: any) => {
        this.departments = val.map((item: any) => item.name);
        if (this.data && this.data.department) {
          this.selecteddepartment = this.data.department.name;
        }
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }

  getProjectName() {
    this._empser.getProjList().subscribe({
      next: (val: any) => {
        // this.projects = val.map((item: any) => item.pName);
        this.projects = val;
        if (this.data && this.data.employeeProjects) {
          this.selectedProjects = this.data.employeeProjects.map((item: any) => item.projectId);
        }
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }

  onFormSubmit() {
    console.log(this.empForm.value);
    this.submitted = true;
    if (this.empForm.valid) {
      if (this.data) {
        this._empser.updateUser(this.data.id, this.empForm.value).subscribe({
          next: (val: any) => {
            this.toast.success({ detail: "Employee Updated Successfully", duration: 5000 });
            this._dilogref.close(true);
          },
          error: (err: any) => {
            alert("Server error: " + err.error);
            console.error(err)
          }
        })
      }
      else {
        console.log(this.empForm.value);
        this._empser.addUser(this.empForm.value).subscribe({
          next: (val: any) => {
            this.toast.success({ detail: "Employee Added Successfully", duration: 5000 });
            this._dilogref.close(true);
          },
          error: (err: any) => {
            this.toast.error({ detail: err.error, duration: 5000 });
            console.error(err)
          }
        })
      }
    }
    else {
      // alert('Fill the data Correctly')
      this.toast.error({ detail: "Fill the data Correctly", duration: 5000 });
    }
  }
  ngOnInit() {
    this.empForm.patchValue(this.data)
    this.getDepartmentName();
    this.getProjectName();
   
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



