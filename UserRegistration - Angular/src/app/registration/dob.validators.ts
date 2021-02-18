import { AbstractControl, ValidationErrors } from "@angular/forms";
import * as moment from 'moment';
export class DateOfBirthValidators{
   static cannotBeAfterCurrentDate(control: AbstractControl):ValidationErrors | null{
       if(control.value!=null){
           const dob = moment(control.value);
           const todaysDate = moment();
           if(dob.isAfter(todaysDate)){
               return {cannotBeAfterCurrentDate : true}
           }
       }
        return null;
    }
}