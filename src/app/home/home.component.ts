import { Component } from '@angular/core';
import { MyserService } from '../services/myser.service'
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  urlSafe?: SafeResourceUrl;
  url : string = "https://www.google.com/";

  constructor(
    private userdata: MyserService,
    private router : Router,
    public sanitizer: DomSanitizer,
    ) { }

  ngOnInit() {
    
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/signin']);
    }
  }
}
