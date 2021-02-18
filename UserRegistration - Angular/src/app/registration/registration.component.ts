import { UserDetails } from './user-details';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRegistrationService } from '../service/user-registration.service';
import { DateOfBirthValidators } from './dob.validators';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
 // submitted:boolean = false;
  constructor(private formBuilder: FormBuilder, private userRegistrationService: UserRegistrationService,
    private router: Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      dob: ['', [Validators.required,DateOfBirthValidators.cannotBeAfterCurrentDate]],
      email: ['', [Validators.required,Validators.email]]
    });
  }

  get firstName() { return this.registrationForm.get('firstName')};
  get lastName() { return this.registrationForm.get('lastName')};
  get dob() { return this.registrationForm.get('dob')};
  get email() { return this.registrationForm.get('email')};

  onSubmit(){
   
   let userDetails = new UserDetails();
   userDetails.firstName = this.registrationForm.get('firstName').value;
   userDetails.lastName = this.registrationForm.get('lastName').value;
   userDetails.dob = this.registrationForm.get('dob').value;
   userDetails.email = this.registrationForm.get('email').value;
   this.userRegistrationService.register(userDetails).subscribe(
     (response:any)=>{
       console.log("Res"+ response);
       this.router.navigate(['app-user-registration-success']);
     },
     (err:HttpErrorResponse)=>{
       this.toastr.error('Unexpected Error');
       console.log("error"+err.message);
     }
   )
     
   }
  
}
