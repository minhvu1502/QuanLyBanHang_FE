import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class QueQuanService {
    ApiUrl = 'https://localhost:44330/api/quequan/getall';
    ApiAdd = 'https://localhost:44330/api/quequan/addhometown';
    ApiEdit = 'https://localhost:44330/api/quequan/edithometown';
    ApiDelete = 'https://localhost:44330/api/quequan/deletehometown/';
    constructor(private httpCLient: HttpClient) {}
    GetAll(): Observable<any> {
        return this.httpCLient.get(this.ApiUrl);
    }
    AddHometown(homeTown: any): Observable<any> {
        return this.httpCLient.post(this.ApiAdd, homeTown);
    }
    EditHomeTown(homeTown: any): Observable<any> {
        return this.httpCLient.post(this.ApiEdit, homeTown);
    }
    DeleteHomeTown(maQue: any): Observable<any> {
        return this.httpCLient.get(this.ApiDelete + maQue);
    }
}
