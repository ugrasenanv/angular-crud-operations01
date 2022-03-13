import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllTasksService } from '../../task-services/get-all-task.service';
import { SharedTaskService } from '../../task-services/shared.service';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css'],
})
export class ViewTaskComponent implements OnInit {
  taskList = [];
  constructor(
    private sharedService: SharedTaskService,
    private router: Router,
    private getAllTasks: GetAllTasksService
  ) {
    sharedService.setViewTaskId(null);
  }

  @ViewChild('modal', { static: false }) modal: ModalComponent;

  ngOnInit() {
    const promise = this.getAllTasks.getAllTasks();
    promise.then(
      (response) => {
        this.taskList = response['res'];
      },
      (error) => {
        console.log('error ' + error);
      }
    );
  }

  updateTask(task) {
    console.log('update task ' + JSON.stringify(task));
  }

  deleteTask(id) {
    console.log('delete task ' + id);
  }

  viewTask(id) {
    this.sharedService.setViewTaskId(id);
    this.router.navigate(['/update']);
  }
  isSettings = false;

  onSettingsOpen() {
    this.isSettings = !this.isSettings;
    console.log('should toggle settings->', this.isSettings);
  }

  onSettingsClose(event: boolean) {
    this.isSettings = event;
    console.log('Should return false when closed->', event);
  }

  // openModal() {
  //   this.modal.open();
  // }
}
