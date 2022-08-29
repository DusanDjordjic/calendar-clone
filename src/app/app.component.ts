import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentService } from 'src/providers/appointment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedDate$: Observable<Date>;
  constructor(private appointemnetService: AppointmentService) {
    this.selectedDate$ = this.appointemnetService.selectedDate$;
  }
}
