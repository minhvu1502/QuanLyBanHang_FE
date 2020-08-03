import { Component, OnInit, ViewChild } from '@angular/core';
import { QueQuanService } from '@modules/dashboard/services/que-quan.service';
import { Subscription } from 'rxjs';

import { EditEmployeesComponent } from '../manage-employees/edit-employees/edit-employees.component';

import { AddHometownComponent } from './add-hometown/add-hometown.component';
import { EditHometownComponent } from './edit-hometown/edit-hometown.component';
import { DeleteHometownComponent } from './delete-hometown/delete-hometown.component';

@Component({
    selector: 'sb-manage-hometown',
    templateUrl: './manage-hometown.component.html',
    styleUrls: ['./manage-hometown.component.scss'],
})
export class ManageHometownComponent implements OnInit {
    @ViewChild(AddHometownComponent) add!: AddHometownComponent;
    @ViewChild(EditHometownComponent) edit!: EditHometownComponent;
    @ViewChild(DeleteHometownComponent) delete!: DeleteHometownComponent;
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
    ngOnInit(): void {
        this.homeService.GetAll().subscribe(val => {
            this.listQue = val;
        });
    }
}
