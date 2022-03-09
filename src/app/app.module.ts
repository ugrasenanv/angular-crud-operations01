import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { GetAllCustomersService } from './services/get-all-customers.service';
import { SharedService } from './services/shared.service';
import { GetACustomerService } from './services/get-acustomer.service';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { NgxAsideModule } from 'ngx-aside';
import { TaskModalComponent } from './components/modal/task-modal.component';
import { GetAllTasksService } from './task-services/get-all-task.service';
import { GetATaskService } from './task-services/get-atask.service';
import { SharedTaskService } from './task-services/shared.service';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';

@NgModule({
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxAsideModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationBarComponent,
    UpdateTaskComponent,
    ViewTaskComponent,
    TaskModalComponent,
    CreateTaskComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    GetAllTasksService,
    GetAllCustomersService,
    SharedService,
    GetATaskService,
    SharedTaskService,
    GetACustomerService,
  ],
})
export class AppModule {}
