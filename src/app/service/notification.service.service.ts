import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  public notificationSubject = new Subject<string>();

  constructor() { }
  sendNotification(data:any ){
    this.notificationSubject.next(data);
  }
}
