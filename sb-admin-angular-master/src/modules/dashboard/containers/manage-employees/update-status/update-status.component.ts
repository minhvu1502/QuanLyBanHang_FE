import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { UpdateStatus } from '@modules/dashboard/models/update-status';
import { ManageEmployeesService } from '@modules/dashboard/services/manage-employees.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
    selector: 'sb-update-status',
    templateUrl: './update-status.component.html',
    styleUrls: ['./update-status.component.scss'],
})
export class UpdateStatusComponent implements OnInit {
    @ViewChild('content') public childModal!: ModalDirective;
    @Output() uploaded = new EventEmitter<string>();
    modalReference: any;
    closeResult: any;
    employee: any;
    constructor(private modalService: NgbModal, private employeeService: ManageEmployeesService) {}
    update1(item: any): void {
        this.employee = item;
        this.open(this.childModal);
    }
    uploadComplete() {
        this.uploaded.emit('complete');
    }
    submitStatus(): void {
        const status: UpdateStatus = {
            maNhanVien: this.employee.maNhanVien,
            Status: this.employee.status,
        };
        console.log(status);
        this.employeeService.UpdateStatus(status).subscribe(result => {
            if (result === true) {
                alert('Cập nhật thành công');
                this.modalReference.dismiss();
                this.uploadComplete();
            } else {
                alert('Cập nhật thất bại');
            }
        });
    }
    open(content: any) {
        this.modalReference = this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            centered: true,
            size: 'sm',
        });
        this.modalReference.result.then(
            (result: any) => {
                this.closeResult = `Closed with: ${result}`;
            },
            (reason: any) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            }
        );
    }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
    ngOnInit(): void {}
}
