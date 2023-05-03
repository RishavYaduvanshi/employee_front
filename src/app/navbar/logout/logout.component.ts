import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

   name :string = "";
  constructor(
    private _dilogref : MatDialogRef<LogoutComponent>,
    private toast : NgToastService,
    private router : Router
  ) { }

  ngOnInit() {
    const user = localStorage.getItem('user');
    if(user != null){
      this.name = user;
      console.log(user);
    }
  }

  logout(){
    this.toast.success({detail:"User Logged Out Successfully",duration:5000});
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/signin']);
  }
}
