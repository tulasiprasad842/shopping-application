import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { DataService } from '../data.service';
import { PeriodicElement, elementData } from '../contacts/model';
import { forkJoin, observable, Observable, merge } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chunks',
  templateUrl: './chunks.component.html',
  styleUrls: ['./chunks.component.css']
})
export class ChunksComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'code'];
  filterauditReportsList: PeriodicElement[] = [];
  // filterauditReports:elementData[]=[];
  public listPage = 0;
  users:PeriodicElement[]=[];
  // Data:elementData[]=[];
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
    let endingIndex = startingIndex + _pageData.pageSize;
    this.filterauditReportsList = this.users.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
    console.log("filterauditReportsList==>" + JSON.stringify(this.filterauditReportsList));
    if(this.users.length<100){
     this.dataservice.getUsers().subscribe(res=>{
       console.log(res);
       if(res.length>0){
  
       }
     })
      
        
        
     
    
  
  
  
  
    this.dataSource = new MatTableDataSource(this.filterauditReportsList);

  
  }











}


}
