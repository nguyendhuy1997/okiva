import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  config = {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    autoplay:{
      delay:5000,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  };
  constructor() { }

  ngOnInit() {
  }

}
