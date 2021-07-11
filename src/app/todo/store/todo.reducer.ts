import { Action, createReducer } from '@ngrx/store';
import { Todo } from '../interfaces/todo.interface';

export const key = 'todo';
export const initialState: Todo = { id: 0, title: '', completed: false };

const todoReducer = createReducer(initialState);

export function reducer(state: Todo, action: Action) {
  return todoReducer(state, action);
}
