import { AbstractControl } from '@angular/forms';

export function isNumberValidator(control: AbstractControl) {
    
  
    var value = isNaN(control.value)


    if (value===true) {
        return { isNumber: true }
    }
    return null;
}



