import { Injectable } from '@angular/core';
import { taskList } from '../data/task-data';
// import { Task } from "src/app/model/task";
// import { taskList } from './../data/data';
@Injectable()
export class GetATaskService {
  // : Task;
  task;
  taskList = taskList;
  constructor() {}

  getTaskByGivenId(id) {
    this.task = this.taskList.find((cus) => cus._id === id);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.task);
      }, 2000);
    });
  }
}
