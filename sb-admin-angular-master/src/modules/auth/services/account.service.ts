import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Account } from '../models/account';

@Injectable({
    providedIn: 'root',
})
export class AccountService {
    ApiUrl = 'https://localhost:44330/api/account';
    constructor(public httpClient: HttpClient) {}
    public Register(account: Account): Observable<any> {
        return this.httpClient.post(this.ApiUrl, account);
    }
}
