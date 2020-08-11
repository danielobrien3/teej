import { Component, OnInit } from '@angular/core';
import { Navigation_button } from '../navigation_button';

@Component({
  selector: 'app-navigation-button',
  templateUrl: './navigation_button.component.html',
  styleUrls: ['./navigation_button.component.css']
})
export class NavigationButtonComponent implements OnInit {
  
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
