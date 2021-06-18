import { Action, createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.actions';

export const key = 'count';
export const initialState = 0;

const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, (state) => state + 1),
  on(CounterActions.decrement, (state) => state - 1),
  on(CounterActions.setTen, (state) => 10),
  on(CounterActions.reset, (state) => initialState)
);

export function reducer(state: number, action: Action) {
  return counterReducer(state, action);
}
