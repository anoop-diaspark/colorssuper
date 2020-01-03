import { Injectable } from '@angular/core';


import { Observable,Subject, BehaviorSubject } from 'rxjs';



@Injectable(
  {
    providedIn: 'root'
  }
)
export class DataService {

public subject = new BehaviorSubject<any>(null);
public subject2 = new BehaviorSubject<any>(null);

sendMessage(message: string) {
this.subject.next({ text: message });
}
sendMessageParam(message: number) {
  this.subject.next({ text: message });

  }
  sendMessageParamWithObj(message: any,mes2:any) {
    this.subject.next({ text: message });
    this.subject2.next({text2 : mes2})
    }
clearMessages() {
this.subject.next(null);
}

getMessage(): Observable<any> {
return this.subject.asObservable();
}

constructor() { }


}
