import {Component, Input, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.scss']
})
export class HeaderMainComponent implements OnInit {

  @Input() title;
  isVisible = false;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  openMenu() {
    this.isVisible = !this.isVisible;
    if (this.isVisible) {
      this.renderer.addClass(document.body, 'lock');
    } else if (!this.isVisible) {
      this.renderer.removeClass(document.body, 'lock');
    }
  }

  unLock() {
    this.renderer.removeClass(document.body, 'lock');
  }

}
