import { Component, OnInit } from '@angular/core';
import { contentBox } from 'src/app/models/models';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayContents:contentBox[]=[
    {title:"Content",content:"Lorem ipsum dolor sit amet;consectetuer adipiscing elit.sed diam nanummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat"},
    {title:"Sub Header",content:"Lorem ipsum dolor sit amet;consectetuer adipiscing elit.sed diam nanummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat;consectetuer adipiscing elit.sed diam nanummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat"}    
  ]
  navigations:string[]=["Home","Product","Company","Contact"]
}
