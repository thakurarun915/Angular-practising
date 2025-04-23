import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
getAllUsers(){
  return [
       {id:101,name:'john',city:'Delhi',salary:2,dob:new Date("05/10/1999")},
       {id:102,name:'john',city:'Delhi',salary:2,dob:new Date("05/10/1999")},
       {id:103,name:'john',city:'Delhi',salary:2,dob:new Date("05/10/1999")},
       {id:104,name:'john',city:'Delhi',salary:2,dob:new Date("05/10/1999")},
       

  ];
}

}
