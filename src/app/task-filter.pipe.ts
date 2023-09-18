import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskFilter',
})
export class TaskFilterPipe implements PipeTransform {
  transform(tasks: any[], filterStatus: string): any[] {
    if (filterStatus === 'all') {
      return tasks;
    }
    return tasks.filter(task => {
      return task.status === filterStatus;
    });
  }
}
