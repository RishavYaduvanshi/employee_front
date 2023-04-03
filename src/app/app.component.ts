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
    console.log(buttonName);
    const empButton = this.elRef.nativeElement.querySelector(`button[routerLink="emp"]`);
    const depButton = this.elRef.nativeElement.querySelector(`button[routerLink="dep"]`);
    const projButton = this.elRef.nativeElement.querySelector(`button[routerLink="proj"]`);
    if (buttonName === 'emp') {
      this.renderer.setStyle(empButton, 'background-color', '#3E54AC');
      this.renderer.setStyle(empButton, 'color', 'white');
      this.renderer.setStyle(depButton, 'background-color', 'white');
      this.renderer.setStyle(depButton, 'color', 'black');
      this.renderer.setStyle(projButton, 'background-color', 'white');
      this.renderer.setStyle(projButton, 'color', 'black');
    } else if (buttonName === 'dep') {
      this.renderer.setStyle(depButton, 'background-color', '#3E54AC');
      this.renderer.setStyle(depButton, 'color', 'white');
      this.renderer.setStyle(empButton, 'background-color', 'white');
      this.renderer.setStyle(empButton, 'color', 'black');
      this.renderer.setStyle(projButton, 'background-color', 'white');
      this.renderer.setStyle(projButton, 'color', 'black');
    }
    else if (buttonName === 'proj') {
      this.renderer.setStyle(projButton, 'background-color', '#3E54AC');
      this.renderer.setStyle(projButton, 'color', 'white');
      this.renderer.setStyle(empButton, 'background-color', 'white');
      this.renderer.setStyle(empButton, 'color', 'black');
      this.renderer.setStyle(depButton, 'background-color', 'white');
      this.renderer.setStyle(depButton, 'color', 'black');
    }

    else if (buttonName === 'home') {
      this.renderer.setStyle(depButton, 'background-color', 'white');
      this.renderer.setStyle(depButton, 'color', 'black');
      this.renderer.setStyle(empButton, 'background-color', 'white');
      this.renderer.setStyle(empButton, 'color', 'black');
      this.renderer.setStyle(projButton, 'background-color', 'white');
      this.renderer.setStyle(projButton, 'color', 'black');
    }

  }

}
