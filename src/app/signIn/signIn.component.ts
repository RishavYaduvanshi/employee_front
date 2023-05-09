import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserService } from '../services/myser.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signIn',
  templateUrl: './signIn.component.html',
  styleUrls: ['./signIn.component.css']
})
export class SignInComponent implements OnInit {

  signinForm !: FormGroup;
  submitted = false;
  constructor(
    private _fb: FormBuilder,
    private _myser: MyserService,
    private toast: NgToastService,
    private router: Router
  ) {
    this.signinForm = this._fb.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }


  ngOnInit() {
  }
  onFormSubmit() {
    this.submitted = true;
    if (this.signinForm.valid) {
      console.log(this.signinForm.value);
      this._myser.login(this.signinForm.value).subscribe({
        next: (val: any) => {
          this.toast.success({ detail: "User Logged In Successfully", duration: 5000 });
          localStorage.setItem("token", val.token);
          localStorage.setItem("user", val.user);
          this.router.navigate(['/']);

        },
        error: (err: any) => {
          this.toast.error({ detail: `ERROR : ${err.error}`, duration: 5000 });
        }

      })

    }
  }

  showPassword = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  get UserName() {
    return this.signinForm.get('UserName');
  }
  get Password() {
    return this.signinForm.get('Password');
  }

}
