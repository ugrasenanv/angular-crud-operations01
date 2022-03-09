import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/task.model';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
})
export class TaskModalComponent {
  @Input() Task: Task;
  constructor(public activeModal: NgbActiveModal) {}
}
