import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrationSuccessComponent } from './user-registration-success.component';

describe('UserRegistrationSuccessComponent', () => {
  let component: UserRegistrationSuccessComponent;
  let fixture: ComponentFixture<UserRegistrationSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegistrationSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
