import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private formdata=new Subject<any>()
dataAsObservable$=this.formdata.asObservable()
  constructor() { }
  sentData(data:any){
    this.formdata.next(data)
  }
}
