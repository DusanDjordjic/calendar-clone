export class AppointmentModel {
  id: number;
  date: Date;
  title: string;
  description: string;
  constructor(obj?: any) {
    this.id = (obj && obj.id) || null;
    this.date = (obj && obj.date) || null;
    this.title = (obj && obj.title) || null;
    this.description = (obj && obj.description) || null;
  }
}
