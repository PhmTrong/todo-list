import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public tasks: Task[] = [];

  constructor() {
    const data = localStorage.getItem('tasks');

    if(!data)
      return;

    this.tasks = JSON.parse(data);
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  deleteTask(id: number): void {
    const index = this.tasks.findIndex(x => x.id === id);
    this.tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  editTask(id: number, task: Task): void {
    const index = this.tasks.findIndex(x => x.id === id);
    this.tasks.splice(index, 1, task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
