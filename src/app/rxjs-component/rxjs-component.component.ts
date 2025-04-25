import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import{ajax} from 'rxjs/ajax';

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

    // const observable = new Observable(obj => obj.next(Math.random()));

    // //subscriber 1

    // observable.subscribe(d => console.log(d));


    // //subscribe 2
    // observable.subscribe(d => console.log(d));

    // const subject = new Subject();


    // //subscriber 1
    // subject.subscribe(d => console.log(d));


    // //subscriber 2
    // subject.subscribe(d => console.log(d));

    // subject.next(Math.random());

    // const subject = new Subject();

    // const data = ajax('https://jsonplaceholder.typicode.com/users');

    // subject.subscribe(d => console.log(d));
    // subject.subscribe(d => console.log(d));

    // const result = data.subscribe(subject);
     

    const subject = new Subject();
    subject.subscribe(d => console.log(d));
    subject.subscribe(d => console.log(d));
    subject.next(2020);

    //behavior subject
    const bsubject = new BehaviorSubject<number>(12);
    bsubject.subscribe(d => console.log('BehaviorSubject Subscriber  ${d}'));

    

  }

}

//https://jsonplaceholder.typicode.com/users