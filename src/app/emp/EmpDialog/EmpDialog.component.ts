import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserService } from '../../services/myser.service';
import { MatCheckboxChange } from '@angular/material/checkbox'



@Component({
  selector: 'app-EmpDialog',
  templateUrl: './EmpDialog.component.html',
  styleUrls: ['./EmpDialog.component.css']
})
export class EmpDialogComponent implements OnInit {

  empForm: FormGroup;
  departments: string[] = [];
  projects: any[] = [];
  projShow : any[] = [];
  submitted = false;
  selecteddepartment = '';
  selectedProjects: any[] = [];


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
        ProjectIds: ['', Validators.required],
      });
  }

  

  getDepartmentName() {
    this._empser.getDepartment().subscribe({
      next: (val: any) => {
        this.departments = val.map((item: any) => item.name);
        if (this.data && this.data.department) {
          console.log(this.data.department,"dept");
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
          console.log("proj");
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
      console.log(this.selectedProjects);
      if (this.data) {
        this._empser.updateUser(this.data.id,  this.empForm.value).subscribe({
          next: (val: any) => {
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



