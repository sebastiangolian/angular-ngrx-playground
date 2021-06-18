import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CounterActions from '../../store/counter.actions';
import { Counter } from './../../interfaces/counter.interface';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  count$: Observable<number> = new Observable();

  constructor(private store: Store<Counter>) {
    this.count$ = store.select((counter: Counter) => counter.count);
  }

  increment() {
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }

  setTen() {
    this.store.dispatch(CounterActions.setTen());
  }

  reset() {
    this.store.dispatch(CounterActions.reset());
  }
}
