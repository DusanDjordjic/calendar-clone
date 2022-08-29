import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { first, Observable } from 'rxjs';
import { AppointmentModel } from 'src/models/appointment.model';
import { TimeModel } from 'src/models/time.model';
import { AppointmentService } from 'src/providers/appointment.service';

@Component({
  selector: 'app-add-appointment-dialog',
  templateUrl: './add-appointment-dialog.component.html',
  styleUrls: ['./add-appointment-dialog.component.scss'],
})
export class AddAppointmentDialogComponent implements OnInit {
  public selectedDate$: Observable<Date>;
  appointmentForm: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { selectedDate: Date },
    private appointmentService: AppointmentService,
    private dialog: MatDialog
  ) {
    this.selectedDate$ = this.appointmentService.selectedDate$;

    this.appointmentForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null),
      startTime: new FormControl(null, Validators.required),
      endTime: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.appointmentForm.invalid) {
      return;
    }
    // TODO Start time must be smaller than end time
    const values = this.appointmentForm.value;

    values.startTime = values.startTime.value;
    values.endTime = values.endTime.value;

    this.selectedDate$.pipe(first()).subscribe({
      next: (selectedDate) => {
        const newAppointment = new AppointmentModel({
          ...values,
          date: selectedDate,
        });
        this.appointmentService.addAppointment(newAppointment);
        console.log(this.appointmentForm.value);

        this.dialog.closeAll();
      },
    });
  }

  onSelectStartTime(newStartTime: TimeModel) {
    this.appointmentForm.patchValue({ startTime: newStartTime });
  }

  onSelectEndTime(newEndTime: TimeModel) {
    this.appointmentForm.patchValue({ endTime: newEndTime });
  }
}
