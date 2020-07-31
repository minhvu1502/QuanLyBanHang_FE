import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Employee } from '../models/employee';
import { UpdateStatus } from '../models/update-status';

@Injectable({
    providedIn: 'root',
})
export class ManageEmployeesService {
    ApiUrl = 'https://localhost:44330/api/nhanvien/getallnhanvien';
    ApiAdd = 'https://localhost:44330/api/nhanvien/AddEmployee';
    ApiDelete = 'https://localhost:44330/api/nhanvien/DeleteEmployee/';
    ApiEdit = 'https://localhost:44330/api/nhanvien/EditEmployee';
    ApiUpdateStatus = 'https://localhost:44330/api/nhanvien/UpdateStatus';
    constructor(private httpClient: HttpClient) {}
    public GetListEmployee(): Observable<any> {
        return this.httpClient.get(this.ApiUrl);
    }
    public AddEmployee(employee: Employee): Observable<any>{
        return this.httpClient.post(this.ApiAdd, employee);
    }
    public DeleteEmployee(Id: any): Observable<any> {
        return this.httpClient.get(this.ApiDelete + Id);
    }
    public EditEmployee(employee: Employee): Observable<any> {
        return this.httpClient.post(this.ApiEdit, employee);
    }
    public UpdateStatus(model: UpdateStatus): Observable<any> {
        return this.httpClient.post(this.ApiUpdateStatus, model);
    }
}
