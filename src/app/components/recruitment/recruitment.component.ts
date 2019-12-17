import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css']
})
export class RecruitmentComponent implements OnInit {

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
