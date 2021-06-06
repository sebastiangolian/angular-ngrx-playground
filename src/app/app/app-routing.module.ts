import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'todo',
    loadChildren: () =>
      import('./../todo/todo.module').then((m) => m.TodoModule),
  },
  {
    path: 'counter',
    loadChildren: () =>
      import('../counter/counter.module').then((m) => m.CounterModule),
  },
  { path: 'todo-new', loadChildren: () => import('../todo-new/todo-new.module').then(m => m.TodoNewModule) },
  //{ path: 'books', loadChildren: () => import('../books/books.module').then(m => m.BooksModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
