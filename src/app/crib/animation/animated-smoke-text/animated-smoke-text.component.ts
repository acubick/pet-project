import {Component,  HostListener, OnInit} from '@angular/core';
import {moveLetter} from '../animation';


@Component({
  selector: 'app-animated-smoke-text',
  templateUrl: './animated-smoke-text.component.html',
  styleUrls: ['./animated-smoke-text.component.scss'],
  animations: [
    moveLetter
  ]
})
export class AnimatedSmokeTextComponent implements OnInit {
  public itemPrefix: Array<string> = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  state = [];

  @HostListener('mouseover', ['$event']) mouseMove(e: MouseEvent) {
    console.log(this.state);
  }

  constructor() {
  }




  ngOnInit(): void {

  }




}
