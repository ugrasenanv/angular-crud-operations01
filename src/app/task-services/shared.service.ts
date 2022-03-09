import { Injectable } from '@angular/core';

@Injectable()
export class SharedTaskService {
  viewTaskId: number;
  constructor() {}

  setViewTaskId(id) {
    this.viewTaskId = id;
  }

  getViewTaskId() {
    return this.viewTaskId;
  }
}
