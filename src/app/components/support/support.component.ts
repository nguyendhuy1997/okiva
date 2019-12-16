import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { SwiperComponent } from 'angular2-useful-swiper';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  config = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 500,
      modifier: 1,
      slideShadows: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
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
