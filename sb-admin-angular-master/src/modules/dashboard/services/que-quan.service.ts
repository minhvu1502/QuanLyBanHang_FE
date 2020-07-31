import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class QueQuanService {
    ApiUrl = 'https://localhost:44330/api/quequan/getall';
    constructor(private httpCLient: HttpClient) {}
    GetAll(): Observable<any> {
        return this.httpCLient.get(this.ApiUrl);
    }
}
