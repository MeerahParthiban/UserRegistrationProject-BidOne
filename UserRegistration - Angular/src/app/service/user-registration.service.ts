import { UserDetails } from '../registration/user-details';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }
  register(userDetails:UserDetails){
    console.log("inside register");
    var body = 
    {    
    FirstName: userDetails.firstName,
    LastName: userDetails.lastName,
    DateOfBirth: userDetails.dob,
    Email: userDetails.email
  };
  console.log("inside register2322"+ body);
  return this.http.post('https://localhost:44399/api/registration/submit',body, {responseType: 'text'});
}
}