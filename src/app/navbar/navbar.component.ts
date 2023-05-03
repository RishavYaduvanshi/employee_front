import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { MatDialog } from '@angular/material/dialog';
import { LogoutComponent } from './logout/logout.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    private elRef: ElementRef,
    private router: Router,
    private _dilog: MatDialog,
  ) { }

  ngOnInit() {

    this.changeColor();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.changeColor();
      }
    });
  }

  changeColor() {
    const currentRoute = this.router.url;
    const empButton = this.elRef.nativeElement.querySelector(`button[routerLink="/emp"]`);
    const depButton = this.elRef.nativeElement.querySelector(`button[routerLink="/dep"]`);
    const projButton = this.elRef.nativeElement.querySelector(`button[routerLink="/proj"]`);
    if (currentRoute === '/emp') {
      this.renderer.setStyle(empButton, 'background-color', '#3E54AC');
      this.renderer.setStyle(empButton, 'color', 'white');
      this.renderer.setStyle(depButton, 'background-color', 'white');
      this.renderer.setStyle(depButton, 'color', 'black');
      this.renderer.setStyle(projButton, 'background-color', 'white');
      this.renderer.setStyle(projButton, 'color', 'black');
    } else if (currentRoute === '/dep') {
      this.renderer.setStyle(depButton, 'background-color', '#3E54AC');
      this.renderer.setStyle(depButton, 'color', 'white');
      this.renderer.setStyle(empButton, 'background-color', 'white');
      this.renderer.setStyle(empButton, 'color', 'black');
      this.renderer.setStyle(projButton, 'background-color', 'white');
      this.renderer.setStyle(projButton, 'color', 'black');
    } else if (currentRoute === '/proj') {
      this.renderer.setStyle(projButton, 'background-color', '#3E54AC');
      this.renderer.setStyle(projButton, 'color', 'white');
      this.renderer.setStyle(empButton, 'background-color', 'white');
      this.renderer.setStyle(empButton, 'color', 'black');
      this.renderer.setStyle(depButton, 'background-color', 'white');
      this.renderer.setStyle(depButton, 'color', 'black');
    } else {
      this.renderer.setStyle(depButton, 'background-color', 'white');
      this.renderer.setStyle(depButton, 'color', 'black');
      this.renderer.setStyle(empButton, 'background-color', 'white');
      this.renderer.setStyle(empButton, 'color', 'black');
      this.renderer.setStyle(projButton, 'background-color', 'white');
      this.renderer.setStyle(projButton, 'color', 'black');
    }
  }

  openLogout() {
    const dilog = this._dilog.open(LogoutComponent, {});
  }
}
