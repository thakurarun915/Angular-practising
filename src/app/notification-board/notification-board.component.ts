import { Component } from '@angular/core';
import { NotificationServiceService } from '../service/notification.service.service';

@Component({
  selector: 'app-notification-board',
  standalone: false,
  templateUrl: './notification-board.component.html',
  styleUrl: './notification-board.component.css'
})
export class NotificationBoardComponent {
  notificationMessage!: String;

  constructor(private notificationS: NotificationServiceService){}
  ngOnInit(){
    this.notificationS.notificationSubject.subscribe(d => {
      this.notificationMessage = d;

    })

  }

}
