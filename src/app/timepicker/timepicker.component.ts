import { Component, EventEmitter, Output } from '@angular/core';
import { TimeModel } from 'src/models/time.model';
import { getTimes } from 'src/utils/get-times';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss'],
})
export class TimepickerComponent {
  times: TimeModel[] = [];

  constructor() {
    this.times = getTimes();
  }

  @Output() timeChanged = new EventEmitter<{ hour: number; minutes: number }>();
  onSelect(value: any) {
    this.timeChanged.next(value);
  }
}
