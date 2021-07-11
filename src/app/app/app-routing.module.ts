import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'todo', loadChildren: () => import('./../todo/todo.module').then((m) => m.TodoModule) },
  { path: 'counter', loadChildren: () => import('../counter/counter.module').then((m) => m.CounterModule) },
  { path: 'car', loadChildren: () => import('../car/car.module').then((m) => m.CarModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
