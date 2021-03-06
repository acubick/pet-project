import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-drawer-menu',
  templateUrl: './drawer-menu.component.html',
  styleUrls: ['./drawer-menu.component.scss']
})
export class DrawerMenuComponent implements OnInit {
  status: boolean = false;
  constructor(private title: Title) {
    title.setTitle('Drawer Menu');
  }

  ngOnInit(): void {
    //! Solution found that page
    //! https://stackoverflow.com/questions/44545163/how-to-add-stylesheet-dynamically-in-angular-2

    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
    link.integrity = 'sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN';
    link.crossOrigin = 'anonymous';
    head.appendChild(link);
  }

  // document.querySelector('.toggle').onclick = function(){
  //   this.classList.toggle('active')
  // }

  clickEvent(){
    this.status = !this.status;
    console.log(this.status, 'this.status');
  }
}
