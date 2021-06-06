import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../interfaces/todo.interface';
import { getTodos } from '../../state/todo.selectors';

@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.scss'],
})
export class TodoNewComponent implements OnInit {
  public todoForm!: FormGroup;
  public todos!: Observable<Todo[]>;

  constructor(
    private formBuilder: FormBuilder,
    private todoStore: Store<Todo[]>
  ) {}

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      title: ['', [Validators.required]],
    });

    this.todos = this.todoStore.select(getTodos);
  }

  add() {
    if (this.todoForm.valid) {
    }
  }

  update(todo: Todo) {}

  delete(todo: Todo) {}
}
