import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { NgxAsideModule } from 'ngx-aside';
import { GetAllTasksService } from './task-services/get-all-task.service';
import { GetATaskService } from './task-services/get-atask.service';
import { SharedTaskService } from './task-services/shared.service';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { ModalComponent } from './components/modal/modal.component';

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
    CreateTaskComponent,
    ModalComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    GetAllTasksService,
    GetAllTasksService,
    SharedTaskService,
    GetATaskService,
    SharedTaskService,
    GetATaskService,
  ],
})
export class AppModule {}
