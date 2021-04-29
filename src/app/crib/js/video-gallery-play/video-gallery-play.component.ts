import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-video-gallery-play',
  templateUrl: './video-gallery-play.component.html',
  styleUrls: ['./video-gallery-play.component.scss']
})
export class VideoGalleryPlayComponent implements OnInit {


  constructor(private title: Title) {
    title.setTitle('Javascript Play Video on Mouse Hover and Pause on Mouseout | Video Gallery');
  }

  ngOnInit(): void {
    //? Версия на JS
    const clip = document.querySelectorAll('.clip');
    // console.log(clip);
    for (let i = 0; i < clip.length; i++) {
      clip[i].addEventListener('mouseenter', (e) => {
        // clip[i].play();
      });
      clip[i].addEventListener('mouseout', (e) => {
        // clip[i].pause();
      });
    }
  }

}
