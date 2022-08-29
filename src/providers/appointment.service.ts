import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppointmentModel } from 'src/models/appointment.model';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private appointmentsSubject = new BehaviorSubject<AppointmentModel[]>([]);

  addAppointment(newAppointment: AppointmentModel) {
    const currentArray = this.appointmentsSubject.value;

    newAppointment.id = currentArray[currentArray.length - 1].id + 1;
    const newAppointments = [...currentArray, newAppointment];
    this.appointmentsSubject.next(newAppointments);
  }

  removeAppointmentById(id: number) {
    console.log('REMOVE ID ', id);
  }
}
