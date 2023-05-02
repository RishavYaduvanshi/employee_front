import { Component } from '@angular/core';
import { MyserService } from '../services/myser.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private userdata: MyserService,private router : Router) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/signin']);
    }
  }
}
