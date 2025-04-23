import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { UsersService } from './service/users.service';
import { HttpClientModule } from '@angular/common/http'; // ✅ Correct import

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // ✅ Properly import here
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
