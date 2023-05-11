import { Component, OnInit } from '@angular/core';
import { MyserService } from '../services/myser.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-email_verified',
  templateUrl: './email_verified.component.html',
  styleUrls: ['./email_verified.component.css']
})
export class Email_verifiedComponent implements OnInit {

  display = false;
  email !: string;


  constructor(
    private _myser : MyserService,
    private _route : ActivatedRoute,
  ) 
  { 
  }

  ngOnInit() {
    this.email = this._route.snapshot.queryParams['email'];
    this.email_verified();
  }
  email_verified(){
    this._myser.emailVerfiedDone(this.email).subscribe({
      next: (val: any) => {
        this.display = true;
      },
      error: (err: any) => {
        this.display = false;
      }
    });
  }

}
