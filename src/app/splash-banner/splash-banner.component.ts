import { Component, OnInit } from '@angular/core';
import { Navigation_button } from '../navigation_button';

@Component({
  selector: 'app-splash-banner',
  templateUrl: './splash-banner.component.html',
  styleUrls: ['./splash-banner.component.css']
})
export class SplashBannerComponent implements OnInit {

  shop: Navigation_button = {
    id: 1,
    name: 'Shop',
    link: 'placeholder'
  };

  customize: Navigation_button = {
  	id: 2, 
 	name: 'Customize',
 	link: 'placeholder'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
