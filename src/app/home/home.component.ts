import { Component } from '@angular/core';
import {MyserService} from '../services/myser.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private userdata : MyserService){}
  
}
