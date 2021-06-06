import { createAction, props } from '@ngrx/store';
import { Todo } from './../../todo/interfaces/todo.interface';

export const add = createAction(
  '[Todo Component] Add',
  props<{ todo: Todo }>()
  //props<{ todo: Todo }>()
);
export const complete = createAction(
  '[Todo Component] Complete',
  props<{ idTodo: string }>()
);
export const clear = createAction('[Todo Component] Clear');
