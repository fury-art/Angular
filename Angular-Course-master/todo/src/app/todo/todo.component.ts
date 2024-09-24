import {Component, signal, computed} from '@angular/core';
import {TodoInterface} from "./todo.interface";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {TodoHeaderComponent} from "../presentationals/app.component/todo-header/todo-header.component";
import {TodoFormComponent} from "../presentationals/app.component/todo-form/todo-form.component";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    TodoHeaderComponent,
    TodoFormComponent
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  readonly todos = signal<TodoInterface[]>([]);

  readonly todoLength = computed(() => this.todos().length);

  addTodo(value: string): void {
    const todo: TodoInterface = {
      id: '1',
      value,
      done: false
    };

    this.todos.update((todos) => [...todos, todo]);
  }
}
