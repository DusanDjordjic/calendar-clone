export class TimeModel {
  hour: number;
  minutes: number;
  constructor(obj?: any) {
    this.hour = (obj && obj.hour) || 0;
    this.minutes = (obj && obj.minutes) || 0;
  }
}
