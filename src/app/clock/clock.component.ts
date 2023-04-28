import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-clock',
  template: '<div style="text-align:center; font-size: 2em;">{{ time }}</div>'
})
export class ClockComponent implements OnInit {

  time: string | undefined;

  constructor(private timeService: TimeService) { }

  ngOnInit() {
    this.timeService.getTime().subscribe(time => {
      this.time = time;
    });
  }

}
