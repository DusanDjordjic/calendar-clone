import { CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, from, map, Observable, of, switchMap, tap } from 'rxjs';
import { AppointmentModel } from 'src/models/appointment.model';
import { TimeModel } from 'src/models/time.model';
import { AppointmentService } from 'src/providers/appointment.service';
import { getTimes } from 'src/utils/get-times';

interface AppointmentsByTime {
  time: TimeModel;
  appointments: AppointmentModel[];
}
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss'],
})
export class AppointmentListComponent implements OnInit {
  selectedDate$: Observable<Date>;
  appointments$: Observable<AppointmentModel[]>;
  appsByTime$: Observable<AppointmentsByTime[]>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appointmentService: AppointmentService
  ) {
    this.selectedDate$ = this.appointmentService.selectedDate$;
    this.appointments$ = this.selectedDate$.pipe(
      switchMap((date) => {
        return this.appointmentService.appointments$.pipe(
          map((appointments) =>
            appointments.filter((singleAppointment) => {
              const y =
                singleAppointment.date.getFullYear() === date.getFullYear();
              const m = singleAppointment.date.getMonth() === date.getMonth();
              const d = singleAppointment.date.getDate() === date.getDate();
              return y && m && d;
            })
          )
        );
      })
    );

    const times = getTimes();
    this.appsByTime$ = this.appointments$.pipe(
      switchMap((appointments) => {
        return of(times).pipe(
          map((times) => {
            return times.map((time) => {
              return {
                time,
                appointments: appointments.filter((appointment) =>
                  appointment.compareWithTimeModel(time)
                ),
              };
            });
          })
        );
      })
    );
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const year = Number(params['year']);
      const month = Number(params['month']);
      const day = Number(params['day']);

      if (!year || !month || !day) {
        // Set currentDate
        const currentDate = new Date();
        const y = currentDate.getFullYear();
        const m = currentDate.getMonth();
        const d = currentDate.getDate();
        this.router.navigate(['/', y, m, d]);
        return;
      }

      const selectedDate = new Date(year, month, day);
      this.appointmentService.setDate(selectedDate);
    });
  }

  removeAppointmentById(id: number) {
    this.appointmentService.removeAppointmentById(id);
  }

  openDetails(id: number) {
    this.router.navigate(['/', id]);
  }
}
