import { Component } from '@angular/core';
import { Task } from '../../models/task';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  title: string = '';
  tasks: Task[] = [];

  constructor(private todoService: TodoService){
    this.tasks = this.todoService.getTasks();
  }

  getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  addTask() {
    this.title = this.title.trim();
    if (this.title !== '') {
      const id = this.getRndInteger(1, 1000);
      const task = new Task(id, this.title);
      this.todoService.addTask(task);
      this.title = '';
    }
  }

  // editTask(){
  // }
}
