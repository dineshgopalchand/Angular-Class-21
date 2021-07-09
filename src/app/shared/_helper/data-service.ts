import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from './app-error';
import { InvalidInputError } from './invalid-input-error';
import { NotFoundError } from './not-found-error';
import { UnAuthrizedAccessError } from './un-authrized-access-error';

export class DataService {
    constructor(protected http: HttpClient, protected url: string) { }
    protected handleError = (error: HttpErrorResponse) => {
        const status = error.status;
        let errorVal: any = {};
        if (status === 404) {
            errorVal = new NotFoundError(error);
        } else
            if (status === 400) {
                errorVal = new InvalidInputError(error);
            } else
                if (status === 401) {
                    errorVal = new UnAuthrizedAccessError(error);
                } else {
                    // console.log('unexpected error');
                    errorVal = new AppError(error);
                }
        return throwError(errorVal);
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

    fetchData(newURL: string, option?: OptionDetails): Observable<any> {
        const options = option ? option : {};
        return (this.http.get(newURL, options) as Observable<any>)
            .pipe(catchError(this.handleError));
    }

}
export interface OptionDetails {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    } | undefined;
    observe?: 'body' | undefined;
    params?: HttpParams | {
        [param: string]: string | string[];
    } | undefined;
    reportProgress?: boolean | undefined;
    responseType?: 'json' | undefined;
    withCredentials?: boolean | undefined;
}

