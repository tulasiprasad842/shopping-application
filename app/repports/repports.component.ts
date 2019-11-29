import { Component, ViewChild, ElementRef, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { MatTableDataSource } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf'
// declare var jsPDF: any; 
 export interface User {
  name: string;
  position: number;
  weight: number;
  code: string;
}
@Component({
  selector: 'app-repports',
  templateUrl: './repports.component.html',
  styleUrls: ['./repports.component.css']
})
export class RepportsComponent implements OnInit{
  // state: any;
  // getLangs(){}

  // @ViewChild("content", {static:true}) content: ElementRef;
  // displayedColumns: string[] = ['position', 'name', 'weight', 'code'];
  // users:User[];
  // dataSource;
  constructor( private dataservice:DataService,private translate:TranslateService){
 }
ngOnInit(){
  // this.getData1();
  }
  getData1(){
// return this.dataservice.getuser().subscribe((users:User[])=>{
//   this.users=users;
//   this.dataSource= new MatTableDataSource(users);
//    console.log("users==>", this.users);
// }
// )
  }
  ExportToPdf(){
    var doc = new jsPDF();          
var elementHandler = {
  '#ignorePDF': function (element, renderer) {
    return true;
  }
};
var source = window.document.getElementsByTagName("body")[0];
doc.fromHTML(
    source,
    15,
    15,
    {
      'width': 180,'elementHandlers': elementHandler
    });

doc.output("dataurlnewwindow");








    // let doc=new jsPDF('p','pt');
    // doc.setFontSize(10);
    // doc.rect(20, 20, doc.internal.pageSize.getWidth() - 40, 
    // doc.internal.pageSize.getHeight() - 40, 'S');
    // doc.text(['لا إله إلا الله محمد رسول الله', 'لا إله إلا الله', 'a'], 100, 100, { lang: 'ar' });
    // doc.save("data.pdf");
    

// const input = document.getElementById('divIdToPrint');    
// html2canvas(input)
//       .then((canvas) => {
//         const imgData = canvas.toDataURL('image/png');
//         const pdf = new jsPDF();
//         pdf.addImage(imgData, 'PNG', 0, 0);
//         pdf.save("download.pdf");  
//   });












  //   let doc=new jsPDF('p','pt');
  //  let getColumnHeaders =[this.displayedColumns];
    // let getColumnHeaders=[["موضع", "الصيت", "وزن", ""]]
    // let groupedDataRows=[];
    // var itemNew=this.users;
    // var itemNew=[
    //   {position:1, name:'Hydrogen', weight:1.0079, code:'H'},
    //   {position:2, name:'Helium', weight:4.0026, code:'He'},
    //   {position:3, name:'Lithium', weight:6.941, code:'Li'},
    //   {position:4, name:'Beryllium', weight:9.0122, code:'Be'},
    //   {position:5, name:'Boron', weight:10.811, code:'B'},
    //   {position:6, name:'Carbon', weight:12.0107, code:'C'},
    //   {position:7, name:'Nitrogen', weight:14.0067, code:'N'},
    //   {position:8, name:'Oxygen', weight:15.9994, code:'O'},
    //   {position:9, name:'Fluorine', weight:18.9984, code:'F'},
    //   {position:10, name:'Neon', weight:20.1797, code:'Ne'},
    // ];
    // itemNew.forEach(element => {    
    //   var temp = [element.position, element.name, element.weight, element.code];
    //   groupedDataRows.push(temp);
    //   console.log("temp", temp);
    // });

    // console.log(" groupedDataRows==>", groupedDataRows,getColumnHeaders);
    // getColumnHeaders[0].forEach(x=>{
    //   console.log(x);
    //   x=x.replace(x,this.translate.instant('data.'+x)) ;
    //   console.log(x);
  }
}