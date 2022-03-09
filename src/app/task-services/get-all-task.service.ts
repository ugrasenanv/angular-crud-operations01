import { Injectable } from '@angular/core';
import { taskList } from '../data/task-data';
// import { Task } from './task';
// import { taskList } from '../data/data';
// import { Task } from "../model/Task";

@Injectable()
export class GetAllTasksService {
  taskList = taskList;
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
