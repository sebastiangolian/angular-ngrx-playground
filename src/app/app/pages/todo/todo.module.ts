import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './pages/todo/todo.component';

@NgModule({
  declarations: [TodoComponent],
  imports: [CommonModule, TodoRoutingModule],
})
export class TodoModule {}