import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { MyserService } from '../services/myser.service';

@Component({
  selector: 'app-email_forgot',
  templateUrl: './email_forgot.component.html',
  styleUrls: ['./email_forgot.component.css']
})
export class Email_forgotComponent implements OnInit {

  fgForm !: FormGroup
  submitted = false;
  loading = false;
  email !: string;
  constructor(
    private _fb: FormBuilder,
    private toast : NgToastService,
    private _myser : MyserService,
    private _route: ActivatedRoute
  ) 
  {
    this.fgForm = this._fb.group({
      Email: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9.]+@[a-zA-Z0-9]+\\.[a-zA-Z]+')])],
    });
  }

  ngOnInit() {
    this.email = this._route.snapshot.queryParams['email'];
    if(this.email)
    {
      this.Email?.setValue(this.email);
    }
  }

  onFormSubmit()
  {
    this.submitted = true;
    
    if(this.fgForm.valid)
    {
      this.loading = true;
      this._myser.checkEmail(this.fgForm.value['Email']).subscribe({
        next: (val: any) => {
          this.loading = false;
          this.toast.success({detail:"Email Sent Successfully if the email Exist",duration:5000});
        },
        error: (err: any) => {
          this.loading = false;
          this.toast.error({detail:`ERROR : ${err.error}`,duration:5000});
        }
      })
    }
    
  }

  get Email() {
    return this.fgForm.get('Email');
  }

}
