import { Action, createReducer } from '@ngrx/store';
import { Todos } from '../interfaces/todo.interface';

export const key = 'todos';
export const initialState: Todos = {
  todos: [
    { id: 1, title: 'todo 1', completed: true },
    { id: 2, title: 'todo 2', completed: false },
  ],
};

const todoReducer = createReducer(initialState);

export function reducer(state: Todos, action: Action) {
  return todoReducer(state, action);
}
