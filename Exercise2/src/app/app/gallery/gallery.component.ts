import { Component, OnInit } from '@angular/core';
import { galleryThemes } from 'src/app/models/models';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  galleryContent:galleryThemes[]=[
    {content:"Gallery Image",backgroundColor:"#79E0EE"},
    {content:"Gallery Image",backgroundColor:"#98EECC"},
    {content:"Gallery Image",backgroundColor:"#F6FFA6"},
    {content:"Gallery Image",backgroundColor:"#F24C3D"}
  ]
}
