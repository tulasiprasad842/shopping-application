import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { ActivatedRoute } from '@angular/router';
import { item } from '../item';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.css']
})
export class ItemCartComponent implements OnInit {

  constructor(private itemservice:ItemService, private route:ActivatedRoute, private location:Location) { }
 
  cartArray:item[];
  dataSource:item[];

  getCartList():void{
    this.itemservice.getCartList().subscribe(response=>{
      this.cartArray=response;
      this.dataSource=this.cartArray;
    })
  }



  ngOnInit() {
    this.getCartList();
    console.log("cartArray==>", this.cartArray);
    
  }

}
