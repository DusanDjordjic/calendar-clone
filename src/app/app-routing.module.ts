import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

const routes: Routes = [
  {
    path: '',
    component: AppointmentListComponent,
  },
  {
    path: ':year/:month/:day',
    component: AppointmentListComponent,
  },
  {
    path: ':id',
    component: AppointmentDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
