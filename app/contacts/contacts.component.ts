import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { PeriodicElement, elementData } from './model';
import { DataService } from '../data.service';
import * as _ from 'lodash';
import { Observable, interval } from 'rxjs';
import { take, map } from 'rxjs/operators';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})



export class ContactsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'code'];
  filterauditReportsList: PeriodicElement[] = [];
  filterauditReports:elementData[]=[];
  public listPage = 0;
  users:PeriodicElement[]=[];
  Data:elementData[]=[];
  dataSource: any;
  loading:boolean=false;
  pageSize = 9;
  pendingIndxRec:number=0;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor( private dataservice:DataService){
    
  }


  ngOnInit() {
    this.getData1();
  }
  getData1(){
    this.dataservice.getUsers().subscribe((result:PeriodicElement[])=>{
      this.users=result;
      this.dataSource=new MatTableDataSource(this.users)
      console.log("users",this.users);
      console.log("this.dataSource ",this.dataSource);
      this.getListData({ pageIndex: this.listPage, pageSize: this.pageSize })
     
    })
}

getListData(_pageData) {
  let index = 0;
  let startingIndex = _pageData.pageIndex * _pageData.pageSize;
   let endingIndex = (startingIndex + _pageData.pageSize);
  this.pendingIndxRec=endingIndex;
  this.filterauditReportsList = this.users.filter(() => {
    index++;
    console.log("index+++=>", index);
    
    return (index > startingIndex && index <= endingIndex) ? true : false;
  });
  
  console.log("filterauditReportsList==>",this.filterauditReportsList.length<this.pageSize);
  if(this.users.length<100){  
    this.dataservice.getUsers().subscribe((res)=>{
      console.log("res==>", res);
      if(res.length>0){
        this.users=this.users.concat(res);

        let arr = [];
        let chunk_size = 6; //no. of elements you want to print in single row
        let chunkArray = arr.map(function(e, i) {
           return i % chunk_size === 0 ? arr.slice(i, i + chunk_size) : null;
        }).filter(function(e) {
            return e;
          });
      //   var arrayOfObj = this.users;
      //     var chunks = _.chunk(arrayOfObj, Math.ceil(arrayOfObj.length / 10));
      //      console.log("chunks=>",chunks);
      //      let obs =interval(1000).pipe(take(chunks ));
      //  console.log("obs",obs);
       
      //  obs.subscribe(value => console.log("Subscriber: " + value));
        console.log("usersof==>",    this.users.length);
        if(index < this.pageSize){  
        let rindx= this.pendingIndxRec-index;
         
        this.filterauditReportsList = this.users.filter(() => {
          rindx++;
          console.log("rindx=>",  rindx);
          return (rindx > startingIndex && rindx <= endingIndex) ? true : false;
 
         })
        }else{
          index=0;
        let startingIndex = _pageData.pageIndex * _pageData.pageSize;
        let endingIndex = (startingIndex + _pageData.pageSize);
        if(index < this.pageSize){  
         this.filterauditReportsList = this.users.filter(() => {
         index++;
         console.log("index=>",  index);
         return (index > startingIndex && index <= endingIndex) ? true : false;

        })
      }
      }
       
        this.dataSource = new MatTableDataSource(this.filterauditReportsList);
      
      }
    })
  }else{
    this.dataSource = new MatTableDataSource(this.filterauditReportsList);
    console.log("UserData::" + JSON.stringify(this.filterauditReportsList));
  }
}
}

