import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppointmentService } from 'src/providers/appointment.service';
import { AddAppointmentDialogComponent } from '../add-appointment-dialog/add-appointment-dialog.component';

@Component({
  selector: 'app-calendar-wrapper',
  templateUrl: './calendar-wrapper.component.html',
  styleUrls: ['./calendar-wrapper.component.scss'],
})
export class CalendarWrapperComponent {
  public selectedDate$: Observable<Date>;

  onDateChange(newDate: Date) {
    const year = newDate.getFullYear();
    const month = newDate.getMonth();
    const day = newDate.getDate();

    this.router.navigate(['/', year, month, day]);
    window.scrollTo(0, 0);
  }

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private appointmentService: AppointmentService
  ) {
    this.selectedDate$ = this.appointmentService.selectedDate$;
  }

  openDialog() {
    this.dialog.open(AddAppointmentDialogComponent);
  }
}
