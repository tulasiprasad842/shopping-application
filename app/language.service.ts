import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  selectedLanguage='ch';
  segmentsNames: any = {};
  constantSegmentNames: any = {};
  language = {
      undefined: { 'en': '', 'ch': '' },
      null: { 'en': '', 'ch': '' },
      '': { 'en': '', 'ch': '' },
  };


  constructor(private http:HttpClient) { }
getLang(value:string, args?:any):any{
  if(this.language[value]){
    return this.language[value][this.selectedLanguage];
  }
}
}
