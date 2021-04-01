import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-video-cube-d',
  templateUrl: './video-cube-d.component.html',
  styleUrls: ['./video-cube-d.component.scss']
})
export class VideoCubeDComponent implements OnInit {

  constructor(private title: Title) {
    title.setTitle('CSS 3D Video Cube Using Html and CSS');
  }

  ngOnInit(): void {
  }

}
