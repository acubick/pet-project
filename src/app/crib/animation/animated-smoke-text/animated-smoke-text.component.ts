import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
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
  public changedBlockIndex: number | null;
  state = [];

  @HostListener('mouseover', ['$event']) mouseMove(e: MouseEvent) {
    // console.log(e.currentTarget['state']);
    // console.log(e);
    // this.change();

    console.log(this.state);
    // console.log(this.state.);
    // console.log(this.changedBlockIndex);
    // console.log(this.el.nativeElement);
  }

  constructor(private el: ElementRef) {

    // for (const letter of this.text) {
    //   this.textArr.push(letter);
    // }
    //
    // console.log(this.textArr);
  }



  // TODO: Закончить с анимацией по этому видео
  // https://www.youtube.com/watch?v=ra5qNKNc95U&list=PLHfvxV8-y-JpjZZoBe70UsMmUAEdW-ouu


  ngOnInit(): void {


    // now, split text into letters

    //  const text = document.querySelector('.text');
    //  text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>');
    // // now, add active class on hovered <span> tag
    //  const letters = document.querySelectorAll('span');
    //  for (let i = 0; i < letters.length; i++) {
    //    // tslint:disable-next-line:only-arrow-functions
    //     letters[i].addEventListener('mouseover', function() {
    //       letters[i].classList.add('active');
    //     });
    //   }
  }

  onHover(event: MouseEvent) {
    // const direction = event.type === 'mouseenter' ? 'in' : 'out';
    // const host = event.target as HTMLElement;
    // const w = host.offsetWidth;
    // const h = host.offsetHeight;
    //
    // const x = (event.pageX - host.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
    // const y = (event.pageY - host.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
    // const states = ['top', 'right', 'bottom', 'left'];
    // const side = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
    // this.state = `${direction}-${states[side]}`;
  }

  onDone(event: AnimationEvent) {

  }

  change() {
    this.el.nativeElement.backgroundColor = 'yellow';
    this.el.nativeElement.color = 'red';
  }
}
