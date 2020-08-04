import { Component, OnInit, ViewChild } from '@angular/core';
import { QueQuanService } from '@modules/dashboard/services/que-quan.service';
import { Subscription } from 'rxjs';

import { EditEmployeesComponent } from '../manage-employees/edit-employees/edit-employees.component';

import { AddHometownComponent } from './add-hometown/add-hometown.component';
import { DeleteHometownComponent } from './delete-hometown/delete-hometown.component';
import { EditHometownComponent } from './edit-hometown/edit-hometown.component';
import { EditStatusComponent } from './edit-status/edit-status.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { StatusEditComponent } from './status-edit/status-edit.component';

@Component({
    selector: 'sb-manage-hometown',
    templateUrl: './manage-hometown.component.html',
    styleUrls: ['./manage-hometown.component.scss'],
})
export class ManageHometownComponent implements OnInit {
    @ViewChild(AddHometownComponent) add!: AddHometownComponent;
    @ViewChild(EditHometownComponent) edit!: EditHometownComponent;
    @ViewChild(DeleteHometownComponent) delete!: DeleteHometownComponent;
    @ViewChild(HomeDetailComponent) detail!: HomeDetailComponent;
    @ViewChild(StatusEditComponent) editStatus!: StatusEditComponent;
    constructor(private homeService: QueQuanService) {}
    subscription!: Subscription;
    listQue!: any[];
    pageSize = 5;
    page = 1;
    show() {
        this.add.add();
    }
    editHomeTown(item: any) {
        this.edit.show(item);
    }
    deleteHometown(maQue: any){
        this.delete.show(maQue);
    }
   showDetail(item: any) {
        this.detail.show(item);
    }
    updateStatus(item: any): void {
        this.editStatus.recvData(item);
    }
    ngOnInit(): void {
        this.homeService.GetAll().subscribe(val => {
            this.listQue = val;
        });
    }
}
