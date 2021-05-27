import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('shouldBeUnique');
                if (control.value === 'dinesh') {
                    return resolve({ shouldBeUnique: 'username already exist' });
                }
                return resolve(null);
            }, 3000);

        });
    }

}
