import { HttpClient, HttpErrorResponse,  HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';
import { throwError, catchError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmployJsonService {
    private _url: string = "assets/data/employee.json"
    constructor(private _http: HttpClient) { }
    getEmployee(): Observable<IEmployee[]> {
        return this._http.get<IEmployee[]>(this._url).pipe(catchError(this.ErrorHandle))
    }
    ErrorHandle(error: HttpErrorResponse) {
        return throwError(error.message)
    }
} 
