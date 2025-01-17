import {Component} from "@angular/core"

@Component({
  standalone: false,
  selector: 'app-counter',
  template: `
    <h3> Counter: {{counter}} </h3>
    <button (click)="increasedBy(+1)"> +1 </button>
    <button (click)="reset()"> reset </button>
    <button (click)="increasedBy(-1)"> -1 </button>
  `, 
})
export class CounterComponent{
  public counter: number = 20;

  increasedBy(value:number): void {
    this.counter = this.counter + value;
  }
  reset(): void {
    this.counter = 20;
  }
}