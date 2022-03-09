import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedTaskService } from 'src/app/task-services/shared.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit {
  createTaskForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    // public toastr: ToastrManager,
    private sharedService: SharedTaskService
  ) {
    sharedService.setViewTaskId(0);
    this.createTaskForm = formBuilder.group({
      id: [0],
      name: ['', Validators.required],
      project: ['', Validators.required],
      comments: ['', Validators.required],
    });
  }

  ngOnInit() {}

  createTask() {
    console.log('create button clicked');
    console.log('form value ' + JSON.stringify(this.createTaskForm.value));

    if (this.createTaskForm.valid) {
      // this.toastr.successToastr("This is a vaild form.", "Success!");
    } else {
      // this.toastr.warningToastr("This is not a valid form.", "Alert!");
    }
  }
}
