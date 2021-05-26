import { AbstractControl, ValidationErrors } from '@angular/forms';


export class PatternValidators {
    static multiplePatterValidation(patternList: any[]): (control: AbstractControl) => ValidationErrors | null {
        return (control: AbstractControl): ValidationErrors | null => {
            console.log(patternList);
            // return { multiplePatterValiation: 'asdffadsf' };
            return null;
        };
    }
}
