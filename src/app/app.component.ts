import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee_front';

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  changeColor(buttonName: string) {
    const empButton = this.elRef.nativeElement.querySelector(`button[routerLink="emp"]`);
    const depButton = this.elRef.nativeElement.querySelector(`button[routerLink="dep"]`);
    if (buttonName === 'emp') {
      this.renderer.setStyle(empButton, 'background-color', '#3E54AC');
      this.renderer.setStyle(empButton, 'color', 'white');
      this.renderer.setStyle(depButton, 'background-color', 'white');
      this.renderer.setStyle(depButton, 'color', 'black');
    } else if (buttonName === 'dep') {
      this.renderer.setStyle(depButton, 'background-color', '#3E54AC');
      this.renderer.setStyle(depButton, 'color', 'white');
      this.renderer.setStyle(empButton, 'background-color', 'white');
      this.renderer.setStyle(empButton, 'color', 'black');
    }
    else if (buttonName === 'home'){
      this.renderer.setStyle(depButton, 'background-color', 'white');
      this.renderer.setStyle(depButton, 'color', 'black');
      this.renderer.setStyle(empButton, 'background-color', 'white');
      this.renderer.setStyle(empButton, 'color', 'black');
    }

  }

}
