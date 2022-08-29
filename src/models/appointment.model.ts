import { TimeModel } from './time.model';

export class AppointmentModel {
  id: number;
  date: Date;
  title: string;
  description: string;
  startTime: TimeModel;
  endTime: TimeModel;
  constructor(obj?: any) {
    this.id = (obj && obj.id) || null;
    this.date = (obj && obj.date) || null;
    this.title = (obj && obj.title) || null;
    this.description = (obj && obj.description) || null;
    this.startTime =
      (obj && obj.startTime && new TimeModel(obj.startTime)) || null;
    this.endTime = (obj && obj.endTime && new TimeModel(obj.endTime)) || null;
  }

  compareWithTimeModel(time: TimeModel): boolean {
    return (
      this.startTime.hour === time.hour &&
      this.startTime.minutes === time.minutes
    );
  }
}
