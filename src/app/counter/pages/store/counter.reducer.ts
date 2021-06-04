import { Action, createReducer, on } from '@ngrx/store';
import { decrement, increment, reset, setTen } from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(setTen, (state) => 10),
  on(reset, (state) => 0)
);

export function counterReducer(state: number, action: Action) {
  return _counterReducer(state, action);
}
