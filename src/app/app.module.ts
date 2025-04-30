import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { UsersService } from './service/users.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RxjsComponentComponent } from './rxjs-component/rxjs-component.component'; // ✅ Correct import
import { NotificationServiceService } from './service/notification.service.service';
import { ContactComponent } from './contact/contact.component';
import { NotificationBoardComponent } from './notification-board/notification-board.component';
import { HookschildComponent } from './hookschild/hookschild.component';
import { HooksComponent } from './hooks/hooks.component';


@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DashboardComponent,
    RxjsComponentComponent,
    ContactComponent,
    NotificationBoardComponent,
    HookschildComponent,
    HooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // ✅ Properly import here
  ],
  providers: [UsersService, 
    NotificationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
