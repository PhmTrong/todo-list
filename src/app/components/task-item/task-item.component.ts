import { Component, Input } from '@angular/core';
import { Task } from '../../models/task';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input("task")
  data: Task = new Task();
  isEditing: boolean = false;

  constructor(private todoService: TodoService) { }

  deleteTask(){
    this.todoService.deleteTask(this.data.id);
  }

  editTask(){
    this.todoService.editTask(this.data.id, this.data);
    this.isEditing = false;
  }
}

