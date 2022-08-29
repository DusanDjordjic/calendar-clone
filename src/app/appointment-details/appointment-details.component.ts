import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { AppointmentModel } from 'src/models/appointment.model';
import { AppointmentService } from 'src/providers/appointment.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.scss'],
})
export class AppointmentDetailsComponent implements OnInit {
  appointment$: Observable<AppointmentModel>;
  constructor(
    private route: ActivatedRoute,
    private appointmentService: AppointmentService
  ) {
    this.appointment$ = this.route.params.pipe(
      switchMap((params) => {
        return this.appointmentService.appointments$.pipe(
          map(
            (apps) =>
              apps.filter(
                (singleApp) => singleApp.id === Number(params['id'])
              )[0]
          )
        );
      })
    );
  }

  ngOnInit(): void {}
}
