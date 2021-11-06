import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject('Default message');
  currentMessage = this.messageSource.asObservable();
  constructor() { }

  changeMessage(massage: string) {
    this.messageSource.next(massage);
  }
}
