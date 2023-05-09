import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyserService } from '../services/myser.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { passwordValidator } from 'src/passValid';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm !: FormGroup;
  submitted = false;

  loading = false;

  constructor
    (
      private _fb: FormBuilder,
      private _projSer: MyserService,
      private router : Router,
      private toast : NgToastService
    ) {
    this.signupForm = this._fb.group({
      UserName: ['', Validators.required],
      Password: ['', [Validators.required, passwordValidator()]],
      Email: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9.]+@[a-zA-Z0-9]+\\.[a-zA-Z]+')])],

    });
  }

  ngOnInit() {
  }

  onFormSubmit() {
    this.submitted = true;
    if(this.signupForm.valid){
      // console.log(this.signupForm.value);
      this.loading = true;
      this._projSer.signup(this.signupForm.value).subscribe({
        next: (val: any) => {
          this.loading = false;
          this.toast.success({detail:"Please Verify your email id",duration:5000});
          this.router.navigate(['/signin']);
        },
        error: (err: any) => {
          this.loading = false;
          this.toast.error({detail:`ERROR : ${err.error}`,duration:5000});
        }
      })
    }
  }

  

  get UserName() {
    return this.signupForm.get('UserName');
  }

  get Password() {
    return this.signupForm.get('Password');
  }
  get Email() {
    return this.signupForm.get('Email');
  }

  showPassword = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  logme(){
    console.log(this.signupForm.controls);
    return true;
  }
}
