import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  number1: number = 0;
  number2: number = 0;
  sum: number = 0;
  showSum: boolean = false;

  calculateSum() {
    this.sum = this.number1 + this.number2;
    this.showSum = true;
  }
}
