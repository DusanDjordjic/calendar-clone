import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CalendarWrapperComponent } from './calendar-wrapper/calendar-wrapper.component';
import { AddAppointmentDialogComponent } from './add-appointment-dialog/add-appointment-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
@NgModule({
  declarations: [
    AppComponent,
    CalendarWrapperComponent,
    AddAppointmentDialogComponent,
    AppointmentListComponent,
    TimepickerComponent,
    AppointmentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
