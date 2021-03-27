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
  public itemPrefix: Array<string> = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, neque, quas. Aperiam aspernatur consequuntur est libero maiores maxime modi, molestiae praesentium quas quos sapiente sint. Cupiditate dicta dolorem necessitatibus quos! Aut corporis doloremque earum enim expedita facilis harum illo incidunt iste minima minus molestias nemo pariatur placeat porro praesentium provident quisquam,'.split('');
  state = [];

  @HostListener('mouseover', ['$event']) mouseMove(e: MouseEvent) {
    // console.log(this.state);
  }

  constructor() {
  }




  ngOnInit(): void {

  }




}
