import { HttpErrorResponse } from '@angular/common/http';
import { AppError } from './app-error';

export class NotFoundError extends AppError {
    constructor(error: HttpErrorResponse) {
        super();
        return { message: 'Resource not available' };
    }
}
