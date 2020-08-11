import { Component, OnInit } from '@angular/core';
import {Shop_item} from '../shop_item'

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  test = "testname"

  shoes = [
  	new Shop_item(0, "Dripping AF1", "../../assets/sale_example_one.jpg", "shoe", 90), 
  	new Shop_item(1, "Butterfly AF1 (orange)", "../../assets/sale_example_two.jpeg", "shoe", 110),
  	new Shop_item(2, "Confetti AF1", "../../assets/sale_example_three.jpeg", "shoe", 80),
  	new Shop_item(3, "Butterfly AF1 (blue)", "../../assets/sale_example_four.jpg", "shoe", 50)
  ]

  constructor() { }

  ngOnInit(): void {
  }
}