import {Store} from '@ngrx/store';
import {INCREMENT, DECREMENT, RESET} from './counter';
import {Component } from 'angular2/core';
import {Observable } from 'rxjs/Observable';

interface AppState {
  counter: number;
}

@Component({
    selector: 'my-app',
    template: `
      <button (click)="increment()">Increment</button>
        <div>Current Count: {{ counter | async }}</div>
        <button (click)="decrement()">Decrement</button>
    `
})
export class CalcComponent {
    counter: Observable<number>;
    constructor(public store: Store<AppState>){
        this.counter = store.select('x');
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