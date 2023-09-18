import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  template: `
    <h2>Add Task</h2>
    <input [(ngModel)]="newTask.title" placeholder="Task Title" />
    <select [(ngModel)]="newTask.priority">
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
    <button (click)="addTask()">Add Task</button>
  `,
})
export class AddTaskComponent {
  newTask: any = { title: '', priority: 'low' };

  @Output() taskAdded = new EventEmitter<any>();

  addTask() {
    if (this.newTask.title.trim() !== '') {
      this.taskAdded.emit(this.newTask);
      this.newTask = { title: '', priority: 'low' };
    }
  }
}
