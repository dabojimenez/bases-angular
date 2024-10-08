import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>{{ counter }}</h3>

<button (click)="increasBy(1)">+1</button>
<button (click)="increasBy(-1)">-1</button>
<button (click)="reset()">Reset</button>
  `
})

export class CounterComponent {
  public counter: number = 10;
  constructor() { }

  increasBy(value: number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 10;
  }
}
