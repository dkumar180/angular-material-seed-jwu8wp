import { Component  } from '@angular/core';

import { Store } from '@ngrx/store';
import { CounterState, INCREMENT, DECREMENT, RESET } from '../reducers/counter';

@Component({
  selector: 'state-counter',
  template: `
    <md-form-field class="example-full-width">
      <input mdInput="number" [(ngModel)]="counter" />
    </md-form-field>
		<button md-raised-button (click)="increment()">
      Plus
    </button>
    <button md-raised-button (click)="decrement()">
      Minus
    </button>
		<button md-raised-button (click)="reset()">
      Reset
    </button>
  `,
})
export class CounterComponent  {

  counter: number;

	constructor(private store: Store<CounterState>) {
		store.select('counter')
      .subscribe((res:any) => this.counter = res.counter)
	}

	increment(){
		this.store.dispatch({ type: INCREMENT });
	}

	decrement(){
		this.store.dispatch({ type: DECREMENT });
	}

	reset(){
		this.store.dispatch({ type: RESET });
	}
}