import { Component, OnInit } from '@angular/core';
import { NotificationServiceService } from '../service/notification.service.service';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  currentMessage!: String;


  constructor(private notificationS:NotificationServiceService) { }

  ngOnInit() {
    this.notificationS.notificationSubject.subscribe(d => {
      this.currentMessage = d;
    })

  }

  sendMessage(data: string) {
    this.notificationS.sendNotification(data);
  }
  


     
}
