import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-responsive-navbar',
  templateUrl: './responsive-navbar.component.html',
  styleUrls: ['./responsive-navbar.component.scss']
})
export class ResponsiveNavbarComponent implements OnInit {

  constructor(private title: Title) {
    title.setTitle('Responsive Navbar using Html CSS & Javascript | Close Navbar When Click Outside');
  }

  ngOnInit(): void {
    const heaader  = document.getElementById('heaader');
    const toggle = document.getElementById('toggle');
    const navbar = document.getElementById('navbar');

    document.onclick = function(e){
      if(e.target['id'] !== 'header'
         &&  e.target['id'] !== 'toggle'
         &&  e.target['id'] !== 'navbar'
      ){
        toggle.classList.remove('active');
        navbar.classList.remove('active');
        // console.log(e.target['id']);
      }
    }
    toggle.onclick = function() {
      toggle.classList.toggle('active');
      navbar.classList.toggle('active');
    }
  }

}
