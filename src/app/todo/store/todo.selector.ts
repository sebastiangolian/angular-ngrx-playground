import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todos } from '../interfaces/todo.interface';
import { key } from './todo.reducer';

export const selectFeatureTodos = createFeatureSelector<Todos>(key);
export const selectorAllTodos = createSelector(selectFeatureTodos, (state: Todos) => state.todos.filter((todo) => todo.completed));
export const selectorAllCompleteTodos = createSelector(selectFeatureTodos, (state: Todos) => state.todos);
