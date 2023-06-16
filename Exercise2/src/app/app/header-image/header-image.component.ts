import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-image',
  templateUrl: './header-image.component.html',
  styleUrls: ['./header-image.component.css']
})
export class HeaderImageComponent implements OnInit {
  lImagePath="/assets/images/L.png"
  leftImg = this.lImagePath;
  rImagePath="/assets/images/R.png"
  rightImg = this.rImagePath;
  dotsImagePath="/assets/images/dots (1).png"
  dotsImg = this.dotsImagePath;
  constructor() { }

  ngOnInit(): void {
  }

}
