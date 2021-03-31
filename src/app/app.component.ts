import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
}

// ngOnInit(): void {
//   //! Solution found that page
//   //! https://stackoverflow.com/questions/44545163/how-to-add-stylesheet-dynamically-in-angular-2
//
//   this.head = document.getElementsByTagName('head')[0];
//   this.link = document.createElement('link');
//   this.style = document.createElement('style');
//   this.link.rel = 'stylesheet';
//   this.link.href = 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
//   this.link.integrity = 'sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN';
//   this.link.crossOrigin = 'anonymous';
//   this.head.appendChild(this.link);
// }
// ngOnDestroy() {
//   this.head.removeChild(this.link);
// }
