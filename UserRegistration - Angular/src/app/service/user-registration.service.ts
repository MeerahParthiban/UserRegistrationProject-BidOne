import { UserDetails } from '../registration/user-details';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }
  
  //Calling WebAPI post method along with the user details for registration
  register(userDetails:UserDetails){
    var body = 
    {    
    FirstName: userDetails.firstName,
    LastName: userDetails.lastName,
    DateOfBirth: userDetails.dob,
    Email: userDetails.email
  };
  return this.http.post('https://localhost:44399/api/registration/submit',body, {responseType: 'text'});
}
}
