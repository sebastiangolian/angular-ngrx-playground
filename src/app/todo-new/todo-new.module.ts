import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from '../todo/state/todo.reducers';
import { TodoNewComponent } from './pages/todo/todo-new.component';
import { TodoNewRoutingModule } from './todo-new-routing.module';

@NgModule({
  declarations: [TodoNewComponent],
  imports: [
    //imports
    CommonModule,
    TodoNewRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('todos', todoReducer),
  ],
})
export class TodoNewModule {}
