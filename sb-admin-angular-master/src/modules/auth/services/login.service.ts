import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

import { User } from '../models';
import { LoginModel } from '../models/login-model';
import { ReturnResult } from '../models/return-result';
@Injectable({
    providedIn: 'root',
})
export class LoginService {
    ApiUrl: any = 'https://localhost:44330/api/login';
    constructor(private httpClient: HttpClient) {}
    public CheckLogin(loginModel: LoginModel): Observable<any> {
        return this.httpClient.post(this.ApiUrl, loginModel);
    }
}
