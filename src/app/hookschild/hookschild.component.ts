import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hookschild',
  standalone: false,
  templateUrl: './hookschild.component.html',
  styleUrl: './hookschild.component.css'
})
export class HookschildComponent implements OnInit, OnChanges{

  constructor(){
    console.log('Constructor called');

  }
 
  ngOnInit(): void {
    console.log("ng OnInit called");
    
  }
  ngOnChanges()  {
    console.log("ng on chnages called");
   
  }

}
