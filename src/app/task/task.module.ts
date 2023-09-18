import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import {TaskManagementComponent} from "../task-management/task-management.component";
import {FormsModule} from "@angular/forms";
import {HighlightPriorityDirective} from "../highlight-priority.directive";
import {DisableButtonDirective} from "../disable-button.directive";
import {TaskFilterPipe} from "../task-filter.pipe";


@NgModule({
  declarations: [
    AppLayoutComponent,
    TaskListComponent,
    AddTaskComponent,
    TaskManagementComponent,
    HighlightPriorityDirective,
    DisableButtonDirective,
    TaskFilterPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    AppLayoutComponent
  ]
})
export class TaskModule { }
