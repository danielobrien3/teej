import { Component, OnInit, Input } from '@angular/core';
import { Shop_item } from '../shop_item';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
  id: number;
  img: string;
  
  constructor() {}

  ngOnInit(): void {}

  @Input() shop_item: Shop_item
}
