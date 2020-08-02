import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '@modules/dashboard/models/employee';
import { ManageEmployeesService } from '@modules/dashboard/services/manage-employees.service';
import { QueQuanService } from '@modules/dashboard/services/que-quan.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
    selector: 'sb-edit-employees',
    templateUrl: './edit-employees.component.html',
    styleUrls: ['./edit-employees.component.scss'],
})
export class EditEmployeesComponent implements OnInit {
    @ViewChild('content') public childModal!: ModalDirective;
    @Output() uploaded = new EventEmitter<string>();
    closeResult = '';
    listQue!: any[];
    check!: false;
    modalReference: any;
    model: any;
    maQue: any;
    employee!: Employee;
    formEdit = new FormGroup({
        maNhanVien: new FormControl(),
        dateOfBirth: new FormControl(),
        tenNhanVien: new FormControl('', [Validators.required]),
        gioiTinh: new FormControl(),
        diaChi: new FormControl(),
        dienThoai: new FormControl(),
        queQuan: new FormControl(),
    });
    constructor(
        private modalService: NgbModal,
        private manageEmployee: ManageEmployeesService,
        private queService: QueQuanService
    ) {}
    uploadComplete() {
        this.uploaded.emit('complete');
    }

    show(item: Employee): void {
        const x = document.getElementsByClassName('sel');
        let i = 0;
        for (let index = 0; index < this.listQue.length; index++) {
            if (this.listQue[index].maQue === item.maQue) {
                i = index;
                break;
            }
            // x.selectedIndex = i;
        }
        this.formEdit.controls.maNhanVien.setValue(item.maNhanVien);
        this.formEdit.controls.dateOfBirth.setValue(item.ngaySinh);
        this.formEdit.controls.tenNhanVien.setValue(item.ten);
        this.formEdit.controls.gioiTinh.setValue(item.gioiTinh);
        this.formEdit.controls.diaChi.setValue(item.diaChi);
        this.formEdit.controls.dienThoai.setValue(item.soDienThoai);
        this.formEdit.controls.queQuan.setValue(item.maQue);
        this.open(this.childModal);
    }
    open(content: any) {
        this.modalReference = this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            centered: true,
            size: 'lg',
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
    editEmployee(): void{
        this.employee = {
            maNhanVien: this.formEdit.get('maNhanVien')?.value,
            ten: this.formEdit.get('tenNhanVien')?.value,
            gioiTinh: this.formEdit.get('gioiTinh')?.value,
            ngaySinh: this.formEdit.get('dateOfBirth')?.value,
            diaChi: this.formEdit.get('diaChi')?.value,
            soDienThoai: this.formEdit.get('dienThoai')?.value,
            maQue: this.formEdit.get('queQuan')?.value,
        };
        this.manageEmployee.EditEmployee(this.employee).subscribe(result =>{
            if (result === false) {
                alert('Chỉnh sửa thất bại');
            } else {
                alert('Chỉnh sửa thành công');
                this.uploadComplete();
                this.modalReference.dismiss();
            }
        });
    }
    ngOnInit(): void {
        this.queService.GetAll().subscribe(result => {
            this.listQue = result;
        });
    }
}
