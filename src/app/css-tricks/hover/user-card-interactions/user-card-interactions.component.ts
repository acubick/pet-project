import {Component, OnDestroy, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-user-card-interactions',
  templateUrl: './user-card-interactions.component.html',
  styleUrls: ['./user-card-interactions.component.scss']
})
export class UserCardInteractionsComponent implements OnInit,  OnDestroy  {


  head;
  link;
  style;

  constructor(private title: Title) {
    title.setTitle('User Card Interactions');
  }

  ngOnInit(): void {
    //! Solution found that page
    //! https://stackoverflow.com/questions/44545163/how-to-add-stylesheet-dynamically-in-angular-2

    this.head = document.getElementsByTagName('head')[0];
    this.link = document.createElement('link');
    this.style = document.createElement('style');
    this.link.rel = 'stylesheet';
    this.link.href = 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
    this.link.integrity = 'sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN';
    this.link.crossOrigin = 'anonymous';
    this.head.appendChild(this.link);
  }
  ngOnDestroy() {
    this.head.removeChild(this.link);
  }

}
