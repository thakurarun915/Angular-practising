import { Component, OnInit } from '@angular/core';
import { UsersService } from './service/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'project-name';
  users: any[] = [];
  errorMessage:string='Loading...';


constructor(private userService:UsersService){

}
  ngOnInit(){
  this.userService.getAllUsers().subscribe((data)=>{

  
    this.users =  data ;
  } ,(err)=>{
    this.errorMessage= "Some internal issue while making Api call";
  
  });
  }
  
}






