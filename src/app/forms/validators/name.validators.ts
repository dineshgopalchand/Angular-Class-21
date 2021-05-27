import { AbstractControl, ValidationErrors } from '@angular/forms';

export class NameValidators {
    static cannotContainsSpace(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        // console.log(value);
        if (!value) {
            return null;
        }
        // value = value.trim();
        if (value.indexOf(' ') !== -1) {
            return { containsSpace: true };
        }
        // console.log('cannotContainsSpace validator ');
        // return { containsSpace: true };
        return null;
    }
}
