import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-progress-bar-animation',
  templateUrl: './progress-bar-animation.component.html',
  styleUrls: ['./progress-bar-animation.component.scss']
})
export class ProgressBarAnimationComponent implements OnInit {


  constructor(private title: Title) {
    title.setTitle('Infinite Loading Progress Bar Animation Effects');
  }

  ngOnInit(): void {
  }

}
