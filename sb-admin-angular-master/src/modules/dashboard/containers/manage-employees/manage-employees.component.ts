import { Component, OnInit, ViewChild } from '@angular/core';
import { ManageEmployeesService } from '@modules/dashboard/services/manage-employees.service';
import { DataTableDirective } from 'angular-datatables';
import * as $ from 'jquery';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EditEmployeesComponent } from './edit-employees/edit-employees.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { UpdateStatusComponent } from './update-status/update-status.component';
@Component({
    selector: 'sb-manage-employees',
    templateUrl: './manage-employees.component.html',
    styleUrls: ['./manage-employees.component.scss'],
})
export class ManageEmployeesComponent implements OnInit {
    constructor(
        private manageEmployee: ManageEmployeesService,
        private spinner: NgxSpinnerService
    ) {}
    @ViewChild(EditEmployeesComponent) edit!: EditEmployeesComponent;
    @ViewChild(AddEmployeeComponent) add!: AddEmployeeComponent;
    @ViewChild(DeleteEmployeeComponent) delete!: DeleteEmployeeComponent;
    @ViewChild(UpdateStatusComponent) update!: UpdateStatusComponent;
    @ViewChild(ShowDetailComponent) detail!: ShowDetailComponent;
    listEmployees!: any;
    public tableWidget: any;
    pageSize = 5;
    page = 1;
    subscription!: Subscription;
    ngOnInit(): void {
        this.subscription = this.manageEmployee.GetListEmployee().subscribe(result => {
            this.listEmployees = result;
            console.log(this.listEmployees);
        });
    }
    openModal(item: any): void {
        this.edit.show(item);
    }
    addModal(): void {
        this.add.add();
    }
    deleteEmployee(Id: any): void {
        this.delete.delete(Id);
    }
    updateStatus(item: any): void {
        this.update.update1(item);
    }
    showDetail(item: any): void {
        this.detail.show(item);
    }
}
