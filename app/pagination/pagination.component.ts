import { Component, OnInit } from '@angular/core';
import { PageserviceService } from './pageservice.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor( private pageservice: PageserviceService,private http: Http) { }
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  ngOnInit() {
    this.getPagedData()
  }
  getPagedData(){
    this.pageservice.getpageData().subscribe(response=>{
      this.allItems=response;
      this.setPage(1);
    })
  }

  setPage(page: number) {
      // get pager object from service
      this.pager = this.pageservice.getPager(this.allItems.length, page);

      // get current page of items
      this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
