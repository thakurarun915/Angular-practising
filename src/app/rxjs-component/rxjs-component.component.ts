import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-rxjs-component',
  standalone: false,
  templateUrl: './rxjs-component.component.html',
  styleUrl: './rxjs-component.component.css'
})
export class RxjsComponentComponent implements OnInit {
 
  constructor(){}


  ngOnInit() {

    //Observables are unicast

    const observable = new Observable(obj => obj.next(Math.random()));

    //subscriber 1

    observable.subscribe(d => console.log(d));


    //subscribe 2
    observable.subscribe(d => console.log(d));

    const subject = new Subject();


    //subscriber 1
    subject.subscribe(d => console.log(d));


    //subscriber 2
    subject.subscribe(d => console.log(d));

    subject.next(Math.random());

  }

}
