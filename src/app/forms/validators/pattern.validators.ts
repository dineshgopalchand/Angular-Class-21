import { AbstractControl, ValidationErrors } from '@angular/forms';


export class PatternValidators {
    static multiplePatterValidation(patternList: PatternError[]): (control: AbstractControl) => ValidationErrors | null {
        return (control: AbstractControl): ValidationErrors | null => {
            console.log(patternList);
            // return { multiplePatterValiation: 'asdffadsf' };
            const pattern = patternList[0];
            // return {
            //     [pattern.errorkey] : pattern.error
            // };
            return null;
        };
    }
}
export interface PatternError {
    errorkey: string;
    pattern: RegExp;
    error: string;
}

// export function multiplePatterValidation(patternList: any[]): (control: AbstractControl) => ValidationErrors | null {
//     return (control: AbstractControl): ValidationErrors | null => {
//         console.log(patternList);
//         // return { multiplePatterValiation: 'asdffadsf' };
//         return null;
//     };
// }
