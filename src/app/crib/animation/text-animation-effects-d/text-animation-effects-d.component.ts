import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-text-animation-effects-d',
  templateUrl: './text-animation-effects-d.component.html',
  styleUrls: ['./text-animation-effects-d.component.scss']
})
export class TextAnimationEffectsDComponent implements OnInit {


  constructor(private title: Title) {
    title.setTitle('CSS 3D Text Animation Effects');
  }


  ngOnInit(): void {
  }

}
