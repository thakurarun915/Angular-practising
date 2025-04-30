import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hooks',
  standalone: false,
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css'] 
})
export class HooksComponent implements OnInit {
 data!: string;



 constructor(){

 }
 
 
  ngOnInit(): void {
    
  }
 handleData(e: any){
  this.data= e.target.value;
 }
}
