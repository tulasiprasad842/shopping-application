import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  // subject: BehaviorSubject<any[]> = new BehaviorSubject<any>([]);
  // array: Observable<any> =  this.subject.asObservable();
  constructor(private http:HttpClient) { }
  getUsers():Observable<any>{
    return this.http.get('../assets/table/table.json');
    
  }

  getuser():Observable<any>{
    return this.http.get('../assets/table/tabledata.json',);
  }

 
}
