import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  office: string = `Lầu 8, 454 Nguyễn Thị Minh Khai,<br>quận 3, TP.Hồ Chí Minh, Việt Nam`
  email: string = "lienhe@okiva.vn"
  check=0;
  ngOnInit() {
  }
  public changeData(flag) {
    if (flag == 0) {
      this.check=0;
      this.office = `Lầu 8, 454 Nguyễn Thị Minh Khai,<br>quận 3, TP.Hồ Chí Minh, Việt Nam`
      this.email = "lienhe@okiva.vn"
    }
    else{
      this.check=1;
      this.office = `280 Cống Quỳnh, Phạm Ngũ Lão,<br> Quận 1, TP.Hồ Chí Minh, Việt Nam`
      this.email = `lienhe@okiva.vn<br>ceyo@okiva.vn<br>minh.hang@okiva.vn`
    }
  }

}
