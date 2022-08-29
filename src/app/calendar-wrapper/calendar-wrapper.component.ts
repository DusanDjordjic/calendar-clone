import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAppointmentDialogComponent } from '../add-appointment-dialog/add-appointment-dialog.component';

@Component({
  selector: 'app-calendar-wrapper',
  templateUrl: './calendar-wrapper.component.html',
  styleUrls: ['./calendar-wrapper.component.scss'],
})
export class CalendarWrapperComponent implements OnInit {
  selectedDate: Date | null = null;
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(AddAppointmentDialogComponent, {
      data: { selectedDate: this.selectedDate },
    });
  }
}
