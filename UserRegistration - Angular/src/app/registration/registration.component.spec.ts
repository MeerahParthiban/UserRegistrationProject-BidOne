import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from '../app-routing.module';
import { UserRegistrationService } from '../service/user-registration.service';

import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
      imports: [ReactiveFormsModule,HttpClientModule,AppRoutingModule,ToastrModule.forRoot()],
      providers: [UserRegistrationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when no values are entered', () =>{
    expect(component.registrationForm.valid).toBeFalse();
    expect(component.registrationForm.controls['firstName'].errors['required']).toBeTruthy();
  });

  it('form should be valid when proper values are entered', () =>{
    const validDate: Date = new Date("2019-11-09");
    component.registrationForm.controls['firstName'].setValue("Firstname");
    component.registrationForm.controls['lastName'].setValue("lastname");
    component.registrationForm.controls['dob'].setValue(validDate);
    component.registrationForm.controls['email'].setValue("sampleEmail@gmail.com");
    
    expect(component.registrationForm.valid).toBeTruthy();
  });
  
  it('should be invalid when First Name and Last Name contains number or special characters', () => {
    component.registrationForm.controls['firstName'].setValue("SampleName8");
    component.registrationForm.controls['lastName'].setValue("@&lastName");
    
    expect(component.registrationForm.controls['firstName'].errors['pattern']).toBeTruthy();
    expect(component.registrationForm.controls['lastName'].errors['pattern']).toBeTruthy();
  });

  it('should be invalid if email doesnt have a proper format', () => {
    component.registrationForm.controls['email'].setValue("testEmail");
    expect(component.registrationForm.controls['email'].errors['email']).toBeTruthy();

    component.registrationForm.controls['email'].setValue("testEmail@");
    expect(component.registrationForm.controls['email'].invalid).toBeTruthy();

  });

  it('should be invalid if dob is greater than today', () => {
    const dateGreaterThanToday: Date = new Date("2029-02-23");
    
    component.registrationForm.controls['dob'].setValue(dateGreaterThanToday);

    expect(component.registrationForm.controls['dob'].errors['cannotBeAfterCurrentDate']).toBeDefined();
  });

  it('should enable submit button when form is valid', () => {
    const validDate: Date = new Date("2019-11-09");
    component.registrationForm.controls['firstName'].setValue("Firstname");
    component.registrationForm.controls['lastName'].setValue("lastname");
    component.registrationForm.controls['dob'].setValue(validDate);
    component.registrationForm.controls['email'].setValue("sampleEmail@gmail.com");
    fixture.detectChanges();
    let submitButton = fixture.debugElement.query(By.css('button'));
    
    expect(submitButton.nativeElement.disabled).toBeFalsy();
  });


});
