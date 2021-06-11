import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class DataService {
    constructor(protected http: HttpClient, protected url: string) { }
    protected handleError = (error: HttpErrorResponse) => {
        const status = error.status;
        if (status === 404) {
            console.log('URL Not found');
        } else
            if (status === 400) {
                console.log('Invalid Input');
            } else
                if (status === 401) {
                    console.log('Unauthorize Access');
                } else {
                    console.log('unexpected error');
                }
        return throwError({});
    }
    getAll(): Observable<any> {
        return (this.http.get(this.url) as Observable<any>)
            .pipe(catchError(this.handleError));
    }
    create(newData: any): Observable<any> {
        return (this.http.post(this.url, newData) as Observable<any>)
            .pipe(catchError(this.handleError));
    }

    update(id: any, newData: any): Observable<any> {
        return (this.http.put(this.url + '/' + id, newData) as Observable<any>)
            .pipe(catchError(this.handleError));
    }
    delete(id: any): Observable<any> {
        return (this.http.delete(this.url + '/' + id) as Observable<any>)
            .pipe(catchError(this.handleError));
    }

}

