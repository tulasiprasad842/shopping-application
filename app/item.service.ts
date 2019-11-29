import { Injectable } from '@angular/core';
import { item } from './item';
import { Items } from './mockData';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }


  getItems(): item[] {
    return Items;
  }

  getItem(id: number): Observable<item> {
    console.log("item Id==>", id);
    return of(Items.find(item => item.id === id));
  }

  cartArray = [];

  addToCart(item: item): Observable<item[]> {
    if (this.cartArray.length == 0) {
      this.cartArray.push(item)
    }

    var idArray = [];
    for (var i = 0; i < this.cartArray.length; i++) {
      if (idArray.indexOf(this.cartArray[i].id) == -1) {
        idArray.push(this.cartArray[i].id)
      }
    }
    if (idArray.indexOf(item.id) == -1) {
      console.log("idArray", idArray);
      item.count = item.count + 1;
      idArray.push(item)
    } else {
      for (var i = 0; i < this.cartArray.length; i++) {
        if (this.cartArray[i].id == item.id) {
          this.cartArray[i].count == this.cartArray[i].count + 1
        }
      }
    }
    console.log("cartArray", this.cartArray);
    return of(this.cartArray)

  }

  getCartList() :Observable<item[]> {
    return of(this.cartArray)
  }

}
