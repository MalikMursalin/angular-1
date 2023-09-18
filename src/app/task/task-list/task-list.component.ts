import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-task-list',
  template: `
    <h2>Task List</h2>
    <ul>
      <li *ngFor="let task of tasks" [appHighlightPriority]="task.priority">
        {{ task.title }} ({{ task.status }})
        <button [appDisableButton]="task.status" (click)="markAsDone(task)">Mark as Done</button>
      </li>
    </ul>
    <select [(ngModel)]="filterStatus">
      <option value="all">All</option>
      <option value="done">Done</option>
      <option value="undone">Undone</option>
    </select>
    <ul>
      <li *ngFor="let task of tasks | taskFilter: filterStatus">
        {{ task.title }} ({{ task.status }})
      </li>
    </ul>
  `,
})
export class TaskListComponent {
 @Input() tasks: any[] = [
    { title: 'Task 1', status: 'undone', priority: 'low' },
    { title: 'Task 2', status: 'undone', priority: 'medium' },
    { title: 'Task 3', status: 'done', priority: 'medium' },
    { title: 'Task 4', status: 'done', priority: 'high' },
  ];

  filterStatus = 'all';

  markAsDone(task: any) {
    task.status = 'done';
  }
}
