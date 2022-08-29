import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppointmentModel } from 'src/models/appointment.model';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private selectedDateSubject = new BehaviorSubject<Date>(new Date());
  public selectedDate$ = this.selectedDateSubject.asObservable();

  private appointmentsSubject = new BehaviorSubject<AppointmentModel[]>([]);
  public appointments$ = this.appointmentsSubject.asObservable();

  addAppointment(newAppointment: AppointmentModel) {
    const currentArray = this.appointmentsSubject.value;

    if (currentArray.length === 0) {
      newAppointment.id = 1;
    } else {
      newAppointment.id = currentArray[currentArray.length - 1].id + 1;
    }
    const newAppointments = [...currentArray, newAppointment];
    this.appointmentsSubject.next(newAppointments);
  }

  removeAppointmentById(id: number) {
    const apps = [...this.appointmentsSubject.value];
    const finalApps = apps.filter((singleApp) => singleApp.id !== id);
    this.appointmentsSubject.next(finalApps);
  }

  setDate(newDate: Date) {
    this.selectedDateSubject.next(newDate);
  }

  getDate() {
    return this.selectedDateSubject.value;
  }
}
