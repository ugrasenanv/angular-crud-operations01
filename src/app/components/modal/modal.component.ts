import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedTaskService } from 'src/app/task-services/shared.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @ViewChild('myModal', { static: false }) modal: ElementRef;

  createTaskForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedTaskService
  ) {
    sharedService.setViewTaskId(0);
    this.createTaskForm = formBuilder.group({
      id: [0],
      name: ['', Validators.required],
      project: ['', Validators.required],
      Comments: ['', Validators.required],
    });
  }

  // ngOnInit() {}

  open() {
    this.modal.nativeElement.style.display = 'block';
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
  }

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
