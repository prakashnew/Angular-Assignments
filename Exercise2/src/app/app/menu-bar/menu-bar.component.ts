import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // menu-bar array
  menus:string[]=["Home","Product","Company","Contact"]
  imagePath="/assets/images/fb.png"
  fbImg = this.imagePath;
}
