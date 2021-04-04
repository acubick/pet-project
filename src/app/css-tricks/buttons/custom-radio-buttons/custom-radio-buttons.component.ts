import {Component, OnDestroy, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-custom-radio-buttons',
  templateUrl: './custom-radio-buttons.component.html',
  styleUrls: ['./custom-radio-buttons.component.scss']
})
export class CustomRadioButtonsComponent implements OnInit , OnDestroy {

  head;
  link;
  style;

  constructor(private title: Title) {
    title.setTitle('Custom Radio Buttons With Cool Effect');
  }

  ngOnInit(): void {
    //! Solution found that page
    //! https://stackoverflow.com/questions/44545163/how-to-add-stylesheet-dynamically-in-angular-2

    this.head = document.getElementsByTagName('head')[0];
    this.link = document.createElement('link');
    this.style = document.createElement('style');
    this.link.rel = 'stylesheet';
    this.link.href = 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css';
    // this.link.integrity = 'sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN';
    // this.link.crossOrigin = 'anonymous';
    this.head.appendChild(this.link);
  }
  ngOnDestroy() {
    this.head.removeChild(this.link);
  }

}

