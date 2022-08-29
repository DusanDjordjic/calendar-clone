import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppointmentModel } from 'src/models/appointment.model';
import { AppointmentService } from 'src/providers/appointment.service';

@Component({
  selector: 'app-add-appointment-dialog',
  templateUrl: './add-appointment-dialog.component.html',
  styleUrls: ['./add-appointment-dialog.component.scss'],
})
export class AddAppointmentDialogComponent implements OnInit {
  public selectedDate: Date;
  appointmentForm: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { selectedDate: Date },
    private appointmentService: AppointmentService
  ) {
    if (!data.selectedDate) {
      this.selectedDate = new Date();
    } else {
      this.selectedDate = data.selectedDate;
    }
    this.appointmentForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const newAppointment = new AppointmentModel({
      ...this.appointmentForm.value,
      date: this.selectedDate,
    });
    this.appointmentService.addAppointment(newAppointment);
  }
}
