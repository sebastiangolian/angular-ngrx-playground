import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Todo } from '../../interfaces/todo.interface';
import { selectorAllTodos } from '../../store/todo.selector';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  public todoForm!: FormGroup;
  public todos!: any;

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.todos = this.store.select(selectorAllTodos);
    this.todoForm = this.formBuilder.group({
      title: ['', [Validators.required]],
    });
  }

  add(): void {}

  update(todo: Todo): void {}

  delete(todo: Todo): void {}
}
