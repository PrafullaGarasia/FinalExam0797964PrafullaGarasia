import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  getCurrentTime(): Observable<string> {
    return new Observable(observer => {
      setInterval(() => {
        const currentTime = new Date().toLocaleString();
        observer.next(currentTime);
      }, 1000);
    });
  }
}
