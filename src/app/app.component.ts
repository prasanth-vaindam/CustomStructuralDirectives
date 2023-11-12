import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CustomStructuralDirectives';
  isTrue = true;
  display: boolean = false;
  displayElse: boolean = false;
  buttonClick() {
    this.display = true;
    this.displayElse = !this.displayElse;
    this.isTrue = !this.isTrue;
  }
}
