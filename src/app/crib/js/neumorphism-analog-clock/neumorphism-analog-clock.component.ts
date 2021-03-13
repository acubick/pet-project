import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-neumorphism-analog-clock',
  templateUrl: './neumorphism-analog-clock.component.html',
  styleUrls: ['./neumorphism-analog-clock.component.scss']
})
export class NeumorphismAnalogClockComponent implements OnInit, AfterViewInit  {

  hourHandStyle;
  minuteHandStyle;
  secondHandStyle;

  isRunning = true;
  timerId: any;

  date: Date;
  hour: number = 0;
  minute: number = 0;
  second: number = 0;




  constructor() {

  }

  ngOnInit(): void {
    // this.hr.style.transform = `rotateZ(${(this.hh) + (this.mm/12)}deg)`;
  }
  ngAfterViewInit() {
    this.timerId = this.getTime();
  }
  animateAnalogClock() {
    this.hourHandStyle = { transform: `rotateZ(${(this.hour * 30) + (this.minute * 0.5) + (this.second * (0.5 / 60))}deg)` };

    this.minuteHandStyle = { transform: `rotateZ(${(this.minute * 6) + (this.second * 0.1)}deg)` };

    this.secondHandStyle = { transform: `rotateZ(${this.second * 6}deg)` };
  }

  getTime() {
    return setInterval(() => {
      this.date = new Date();
      this.hour = this.date.getHours();
      this.minute = this.date.getMinutes();
      this.second = this.date.getSeconds();

      this.animateAnalogClock();
    }, 1000);
  }

}
