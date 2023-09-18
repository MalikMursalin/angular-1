import { Component } from '@angular/core';

@Component({
  selector: 'app-task-management',
  template: `
    <app-add-task (taskAdded)="addTask($event)"></app-add-task>
    <app-task-list [tasks]="taskList"></app-task-list>
  `,
})
export class TaskManagementComponent {
  taskList: any[] = [
    { title: 'Task 1', status: 'undone', priority: 'low' },
    { title: 'Task 2', status: 'done', priority: 'medium' },
    { title: 'Task 3', status: 'done', priority: 'high' },
  ];

  addTask(newTask: any) {
    newTask = {...newTask, status: 'undone'};
    this.taskList.push(newTask); // Add the new task to the task list
  }
}
