import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter}}</h3>
  <button (click)="increment()">Increment</button>
  <button (click)="decrement()">Decrement</button>
  <button (click)="reset()">Reset</button>
`
})
export class CounterComponent {
  public title: string = 'Mi primera aplicación en Angular';
  public counter: number = 10;

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    this.counter--;
  }

  reset(): void {
    this.counter = 10;
  }
}
