import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { ActivatedRoute } from '@angular/router';
import { item } from '../item';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  constructor(private itemservice:ItemService, private route:ActivatedRoute, private location:Location) { }

  item:item;

getItem():void{
    const id= +this.route.snapshot.paramMap.get('id')
    this.itemservice.getItem(id).subscribe(res=>{
      this.item=res
    })
}


addToCart(){
  this.itemservice.addToCart(this.item);
  console.log("addtocart", this.item);
}

goBack(){
  this.location.back()
}

  ngOnInit() {
    this.getItem();
  }

}
