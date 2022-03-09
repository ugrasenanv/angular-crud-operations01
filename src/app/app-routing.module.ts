import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { ViewCustomerRouteGuardService } from './route-guards/view-customer-route-guard';

const routes: Routes = [
  {
    path: 'create',
    component: CreateCustomerComponent,
  },
  {
    path: 'update',
    component: UpdateCustomerComponent,
    canActivate: [ViewCustomerRouteGuardService],
  },
  {
    path: 'view',
    component: ViewTaskComponent,
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
