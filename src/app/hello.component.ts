import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Helo {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
}
