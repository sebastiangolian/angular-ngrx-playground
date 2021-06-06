import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  decrement,
  increment,
  reset,
  setTen,
} from '../../store/counter.actions';
import { Counter } from './../../interfaces/counter.interface';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  count$: Observable<number> = new Observable();

  constructor(private store: Store<Counter>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  setTen() {
    this.store.dispatch(setTen());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
