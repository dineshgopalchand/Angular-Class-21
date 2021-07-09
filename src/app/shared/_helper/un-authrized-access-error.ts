import { HttpErrorResponse } from '@angular/common/http';
import { AppError } from './app-error';

export class UnAuthrizedAccessError extends AppError {
    constructor(error: HttpErrorResponse) {
        super(error);
        return { message: 'Unauthorized access' };
    }
}
