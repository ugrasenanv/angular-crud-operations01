import { ViewCustomersComponent } from './components/view-customers/view-customers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { ViewCustomerRouteGuardService } from './route-guards/view-customer-route-guard';
import { CreateTaskComponent } from './components/create-task/create-task.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateTaskComponent,
  },
  {
    path: 'update',
    component: UpdateCustomerComponent,
    canActivate: [ViewCustomerRouteGuardService],
  },
  {
    path: 'view',
    component: ViewCustomersComponent,
  },
  {
    path: '',
    component: ViewTaskComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
