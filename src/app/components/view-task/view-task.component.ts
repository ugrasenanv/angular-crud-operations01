import { Component, OnInit } from '@angular/core';
// import { Customer } from "src/app/model/customer";
import { Router } from '@angular/router';
import { GetAllCustomersService } from '../../services/get-all-customers.service';
import { SharedService } from '../../services/shared.service';
@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
})
export class ViewTaskComponent implements OnInit {
  // : Customer[]
  customerList = [];
  constructor(
    private sharedService: SharedService,
    private router: Router,
    private getAllCustomers: GetAllCustomersService
  ) {
    sharedService.setViewCustomerId(null);
  }

  ngOnInit() {
    const promise = this.getAllCustomers.getAllCustomers();
    promise.then(
      (response) => {
        this.customerList = response['res'];
      },
      (error) => {
        console.log('error ' + error);
      }
    );
  }

  updateCustomer(customer) {
    console.log('update customer ' + JSON.stringify(customer));
  }

  deleteCustomer(id) {
    console.log('delete customer ' + id);
  }

  viewCustomer(id) {
    this.sharedService.setViewCustomerId(id);
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
}
