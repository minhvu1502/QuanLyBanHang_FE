import { Component, OnInit, ViewChild } from '@angular/core';
import { QueQuanService } from '@modules/dashboard/services/que-quan.service';
import { Subscription } from 'rxjs';
import { AddHometownComponent } from './add-hometown/add-hometown.component';
import { EditHometownComponent } from './edit-hometown/edit-hometown.component';
import { EditEmployeesComponent } from '../manage-employees/edit-employees/edit-employees.component';

@Component({
    selector: 'sb-manage-hometown',
    templateUrl: './manage-hometown.component.html',
    styleUrls: ['./manage-hometown.component.scss'],
})
export class ManageHometownComponent implements OnInit {
    @ViewChild(AddHometownComponent) add!: AddHometownComponent;
    @ViewChild(EditHometownComponent) edit!: EditHometownComponent;
    constructor(private homeService: QueQuanService) {}
    subscription!: Subscription;
    listQue!: any[];
    pageSize = 5;
    page = 1;
    ngOnInit(): void {
        this.subscription = this.homeService.GetAll().subscribe(
            val => {
                this.listQue = val;
            },
            err => alert('Fail to load data from server')
        );
    }
    show(){
        this.add.add();
    }
    editHomeTown(item: any){
        this.edit.show(item);
    }
}
