import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todoStorage: Todo[] = [];
  private todoSubject = new BehaviorSubject<Todo[]>(this.todoStorage);

  get(): Observable<Todo[]> {
    return this.todoSubject.asObservable();
  }

  add(todo: Todo): void {
    this.todoStorage.push(todo);
    this.todoSubject.next(this.todoStorage);
  }

  complete(idTodo: string): void {
    const findIndex = this.todoStorage.findIndex(
      (todo) => todo.idTodo === idTodo
    );
    if (findIndex) {
      this.todoStorage[findIndex].completed = true;
      this.todoSubject.next(this.todoStorage);
    }
  }

  clear(): void {
    this.todoStorage = [];
    this.todoSubject.next(this.todoStorage);
  }
}
