import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserRegistrationSuccessComponent } from './user-registration-success/user-registration-success.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';

//Application is made responsive on Laptop, iPad and Mobile view using Bootstrap
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    UserRegistrationSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path:'',component: RegistrationComponent},
      {path:'app-user-registration-success',component: UserRegistrationSuccessComponent},
      {path:'**',component: RegistrationComponent}
    ])
  ],
   providers: [UserRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
