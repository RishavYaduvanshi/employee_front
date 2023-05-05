import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { passwordValidator } from 'src/passValid';
import { MyserService } from '../services/myser.service';
@Component({
  selector: 'app-forgot_pass',
  templateUrl: './forgot_pass.component.html',
  styleUrls: ['./forgot_pass.component.css']
})
export class Forgot_passComponent implements OnInit {

  forgotForm !: FormGroup;
  submitted = false;
  email !: string;

  constructor(
    private _fb: FormBuilder,
    private toast : NgToastService,
    private router : Router,
    private route : ActivatedRoute,
    private _myservice : MyserService
  ) 
  { 
    this.forgotForm = this._fb.group({
      NewPassword: ['', [Validators.required,passwordValidator()]],
      ConfirmPassword: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.valid();
    this.email = this.route.snapshot.queryParams['email'];
  }

  onFormSubmit(){
    this.submitted = true;
    if(this.checkBothPasswords()){
      if (this.forgotForm.valid) {
        console.log(this.forgotForm.value['NewPassword'],this.email);
        this._myservice.resetPassword(this.email,this.forgotForm.value['NewPassword']).subscribe({
          next: data => {
            this.toast.success({detail:"Password Changed Successfully",duration:5000});
            this.router.navigate(['/signin']);
          },
          error: error => {
            console.error('There was an error!', error);
          }
        });
      }
    }
    else{
      // this.toast.error({detail:"Passwords do not match",duration:5000});
    }
  }
  checkBothPasswords(){
    if(this.NewPassword?.value == this.ConfirmPassword?.value)
      return true;
    else
      return false;
    
  }
  get NewPassword() {
    return this.forgotForm.get('NewPassword');
  }
  get ConfirmPassword() {
    return this.forgotForm.get('ConfirmPassword');
  }

  valid(){
    console.log(this.forgotForm.controls);
    return true;
  }

}
