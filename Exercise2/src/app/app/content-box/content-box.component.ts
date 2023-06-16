import { Component, OnInit } from '@angular/core';
import { contentBox } from 'src/app/models/models';

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.css']
})
export class ContentBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayContents:contentBox[]=[
    {title:"About",content:"Lorem ipsum dolor sit amet;consectetuer adipiscing elit.sed diam nanummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat"},
    {title:"Company",content:"Lorem ipsum dolor sit amet;consectetuer adipiscing elit.sed diam nanummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat"},
    {title:"Services",content:"Lorem ipsum dolor sit amet;consectetuer adipiscing elit.sed diam nanummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat"},
  ]
}
