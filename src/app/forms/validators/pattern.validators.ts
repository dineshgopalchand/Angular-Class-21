import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PatternValidators {
    static multiplePatterValidation(patternList: PatternError[]): (control: AbstractControl) => ValidationErrors | null {
        return (control: AbstractControl): ValidationErrors | null => {
            if (patternList) {
                const value = control.value as string;
                const errorList: ValidationErrors = {};
                for (const p of patternList) {
                    // console.log(p);
                    if (!p.pattern.test(value)) {
                        errorList[p.errorkey] = p.error;
                    }
                }
                if (Object.entries(errorList).length === 0) {
                    return null;
                } else {
                    return errorList;
                }
            }

            // console.log(patternList);
            // return { multiplePatterValiation: 'asdffadsf' };
            // const pattern1 = patternList[0];
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
