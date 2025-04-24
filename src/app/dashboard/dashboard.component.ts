import { Component, OnInit } from '@angular/core';
import { filter, Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
    constructor() {
      
    }
  


ngOnInit() {
  


    const promise = new Promise(resolve =>{

      setTimeout(()=>{
        resolve('Promise working');
        resolve('Promise working1');
        resolve('Promise working2');
        resolve('Promise working3');
      },1000)
    })


    promise.then(result => console.log(result));


    //observable


    const observable = new Observable(subscribe =>{
      setTimeout(()=> {
                 subscribe.next('Observable working');
                 subscribe.next('Observable working1');
                 subscribe.next('Observable working2');
                 subscribe.next('Observable working3');
      },1000);
    });
     
    observable.pipe(
      filter(d => d === 'Observable working1'),
    )
    
    
    .subscribe(result => console.log(result));
  }
} 

//observables needs subscriber to listen them

// when we need to unsubcribe we need to call ngOnDestroy() so it will destroyed and unsubried through unsubribe not sure 