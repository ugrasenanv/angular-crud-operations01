import { Injectable } from '@angular/core';
import { taskList } from '../data/task-data';
import { Task } from '../data/task';

@Injectable()
export class GetAllTasksService {
  taskList: Task[] = taskList;
  constructor() {}

  getAllTasks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { res: this.taskList };
        resolve(data);
      }, 2000);
    });
  }
}
