import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements OnInit{
  title = 'sample1';


  constructor(translate: TranslateService) {

  }
ngOnInit(){
    
  }
          
  
}