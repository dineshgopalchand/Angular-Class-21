import { HttpErrorResponse } from '@angular/common/http';

export class AppError {
    constructor(error?: HttpErrorResponse) {
        if (error) {
            // report this error to logging service
            console.log('AppError', error);
            return error.error;
        }
        return { message: 'unexpected error! Please try again later or report a bug' };
    }
}
