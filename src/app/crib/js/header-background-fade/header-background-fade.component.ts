import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-header-background-fade',
  templateUrl: './header-background-fade.component.html',
  styleUrls: ['./header-background-fade.component.scss']
})
export class HeaderBackgroundFadeComponent implements OnInit {

  constructor(private title: Title) {
    title.setTitle('Header Background Fade On Scroll | Parallax Effects Using Html CSS & Javascript');
  }

  ngOnInit(): void {
    let headerBg = document.getElementById('bg');
    window.addEventListener('scroll', function () {
       headerBg.style.opacity = 1 - +window.pageYOffset / 550;
       headerBg.style.top = +window.pageYOffset/2 + 'px';
       headerBg.style.backgroundPositionY = - +window.pageYOffset/10 + 'px';

    })
  }

}
