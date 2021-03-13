import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-random-color-generator',
  templateUrl: './random-color-generator.component.html',
  styleUrls: ['./random-color-generator.component.scss']
})

export class RandomColorGeneratorComponent {
  styleOne = '';
  boxes = [];

  constructor() {
     // TODO: Сделать добавление текста в блоки при инициализации массива
    for (let i = 0; i < 100; i++) {
      const box = document.createElement('div');
      this.boxes.push(box);
    }
    // console.log(this.boxes);
  }

  randomNexColorCode(): string {
    let chars = '0123456789abcdef',
      colorLength = 6,
      color = '';
    for (let i = 0; i < colorLength; i++) {
      const randomColor = Math.floor(Math.random() * chars.length);
      color += chars.substring(randomColor, randomColor + 1);
    }
    return '#' + color;
  }

  changeColor() {
    const randomColorBlock = document.querySelectorAll('.box');
    randomColorBlock.forEach(e => {
      const newColor = this.randomNexColorCode();
      e.style.backgroundColor = newColor;
      e.innerHTML = newColor;
    });
  }

}
