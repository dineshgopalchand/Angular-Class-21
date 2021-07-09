import { HttpErrorResponse } from '@angular/common/http';
import { AppError } from './app-error';

export class InvalidInputError extends AppError {
    constructor(error: HttpErrorResponse) {
        super();
        return { message: 'Invalid input details' };
    }
}
