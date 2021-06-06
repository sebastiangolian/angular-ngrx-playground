import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from '../interfaces/todo.interface';
import { add } from './todo.actions';

export interface TodoState extends EntityState<Todo> {
  loading: boolean;
  error: string;
}

export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

const todoDefaultState: TodoState = {
  ids: [],
  entities: {},
  loading: false,
  error: '',
};

export const initialState: TodoState =
  todoAdapter.getInitialState(todoDefaultState);

const _counterReducer = createReducer(
  initialState,
  //on(add, (state) => state + 1),
  on(add, (state, { todo }) => ({ ...state }))
  //   on(decrement, (state) => state - 1),
  //   on(setTen, (state) => 10),
  //   on(reset, (state) => 0)
);

export function counterReducer(
  state: TodoState = initialState,
  action: Action
) {
  return _counterReducer(state, action);
}
