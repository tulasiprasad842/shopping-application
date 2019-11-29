import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { item } from '../item';

@Component({
  selector: 'app-shopping-items',
  templateUrl: './shopping-items.component.html',
  styleUrls: ['./shopping-items.component.css']
})
export class ShoppingItemsComponent implements OnInit {
   items:item[];
  constructor(private itemservice:ItemService) { }
  
  getItems(): void {
    this.items = this.itemservice.getItems();
  }

  ngOnInit() {
    this.getItems();
  }

}
