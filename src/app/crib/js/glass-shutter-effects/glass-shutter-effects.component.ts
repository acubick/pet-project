import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-glass-shutter-effects',
  templateUrl: './glass-shutter-effects.component.html',
  styleUrls: ['./glass-shutter-effects.component.scss']
})
export class GlassShutterEffectsComponent implements OnInit {

  constructor(private title: Title) {
    title.setTitle('Glass Shutter Effects using CSS and Javascript | Glassmorphism');
  }

  ngOnInit(): void {
  }

  rangeSlider($event){
    // console.log($event.target.value);
    document.getElementById('rangeValue').innerHTML = $event.target.value;
    document.getElementById('fillRangeTopLeft').style.width = +$event.target.value/4 + '%';
    document.getElementById('fillRangeTopRight').style.height  = +$event.target.value/2+ '%';
    document.getElementById('fillRangeBottomLeft').style.height  = +$event.target.value/2+ '%';
    document.getElementById('fillRangeBottomRight').style.width = +$event.target.value/4 + '%';
  }

}
