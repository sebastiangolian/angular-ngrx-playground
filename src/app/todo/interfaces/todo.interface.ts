export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface Todos {
  todos: Todo[];
}
