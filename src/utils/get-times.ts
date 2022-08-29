import { TimeModel } from 'src/models/time.model';

export function getTimes(): TimeModel[] {
  const times = [];

  times.push({ hour: 0, minutes: 0 });
  for (let i = 0; i < 24 * 2 - 1; i++) {
    const next: TimeModel = { ...times[times.length - 1] };
    next.minutes += 30;
    if (next.minutes === 60) {
      next.minutes = 0;
      next.hour += 1;
    }
    times.push(next);
  }
  return times;
}
