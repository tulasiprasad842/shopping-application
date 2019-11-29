import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import 'chartjs-plugin-labels';
import { FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardForm:FormGroup;
  @ViewChild('myCanvas',{static:true}) myCanvas: ElementRef;
  @ViewChild('canvas',{static:true}) canvas: ElementRef;
  @ViewChild('downloadLink',{static:true}) downloadLink: ElementRef;
  globalpieChartOptions: any = {
    responsive: true,
    
    backgroundColor: [
      "#ff9900",
      "#ff9900",
      "#97bbcd",
      "#97bbcd"
    ],
    legend: {
      display: true,
      position: 'bottom',
      align:'start',
      
      labels: {
        usePointStyle: true,
      }
    }
  }
    labels: 
    {
      render: 'percentage',
    }
    
  moduleWiseData:any = [40, 20, 20];
  moduleChartLabels:string[] = ['Running', 'Stop', 'Idle'];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dashboardForm=this.fb.group({
      periodicWise:['']
    });
  }
  exportChartPNG(event){
    // let ctx  = document.getElementById("chart").getContext("2d");
    // let chart = new Chart(ctx, {
    //  data:{
    //    datasets: this.moduleWiseData  
    //  }
    // })
    // var link = document.createElement('a');
    // link.href = chart.toBase64Image();
    // link.download = 'myImage.png';
    // link.click();
    // console.log(event);
    
    // var anchor = event.target;
    // get the canvas, I'm getting it by tag name, you can do by id
    // and set the href of the anchor to the canvas dataUrl
    this.downloadLink.nativeElement.href = document.getElementsByTagName('canvas')[0].toDataURL();
    this.downloadLink.nativeElement.download = 'chart.png';
    this.downloadLink.nativeElement.click();
    // anchor.href = 
    // set the anchors 'download' attibute (name of the file to be downloaded)
    // anchor.download = "test.png";
  }

  }


