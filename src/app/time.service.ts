import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  getTime(): Observable<string> {
    return new Observable(observer => {
      setInterval(() => {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        const dateString = now.toDateString();
        const dateTimeString = dateString + ' ' + timeString;
        observer.next(dateTimeString);
      }, 1000);
    });
  }
}
