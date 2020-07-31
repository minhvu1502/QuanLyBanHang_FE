import { Route } from '@angular/compiler/src/core';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '@modules/dashboard/models/employee';
import { ManageEmployeesService } from '@modules/dashboard/services/manage-employees.service';
import { QueQuanService } from '@modules/dashboard/services/que-quan.service';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDirective } from 'ngx-bootstrap/modal';
declare var $: any;
@Component({
    selector: 'sb-add-employee',
    templateUrl: './add-employee.component.html',
    styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
    @ViewChild('content') public childModal!: ModalDirective;
    @Output() uploaded = new EventEmitter<string>();
    modalReference!: any;
    closeResult = '';
    listQue!: any[];
    IsShow = true;
    submitted = false;
    formAdd = new FormGroup({
        maNhanVien: new FormControl('', [Validators.required]),
        dateOfBirth: new FormControl('', [Validators.required]),
        tenNhanVien: new FormControl('', [Validators.required]),
        gioiTinh: new FormControl('Nam', [Validators.required]),
        diaChi: new FormControl('', [Validators.required]),
        dienThoai: new FormControl('', [Validators.required]),
        queQuan: new FormControl('', [Validators.required]),
    });
    constructor(
        private modalService: NgbModal,
        private employeeService: ManageEmployeesService,
        private queService: QueQuanService,
        private router: Router
    ) {}
    clearForm(): void {
        this.formAdd.controls.maNhanVien.setValue('');
        this.formAdd.controls.dateOfBirth.setValue('');
        this.formAdd.controls.tenNhanVien.setValue('');
        this.formAdd.controls.gioiTinh.setValue('');
        this.formAdd.controls.diaChi.setValue('');
        this.formAdd.controls.dienThoai.setValue('');
        this.formAdd.controls.queQuan.setValue('');
        this.submitted = false;
    }
    uploadComplete() {
        this.uploaded.emit('complete');
    }
    ngOnInit(): void {
        this.IsShow = true;
        this.queService.GetAll().subscribe(result => {
            this.listQue = result;
            console.log(this.listQue);
        });
    }
    add(): void {
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
    addEmployee(): void {
      this.submitted = true;
      if (this.formAdd.invalid) {
        return;
      }
        const employee: Employee = {
            maNhanVien: this.formAdd.get('maNhanVien')?.value,
            ten: this.formAdd.get('tenNhanVien')?.value,
            gioiTinh: this.formAdd.get('gioiTinh')?.value,
            ngaySinh: this.formAdd.get('dateOfBirth')?.value,
            diaChi: this.formAdd.get('diaChi')?.value,
            soDienThoai: this.formAdd.get('dienThoai')?.value,
            maQue: this.formAdd.get('queQuan')?.value,
        };
        console.log(employee);
        this.employeeService.AddEmployee(employee).subscribe(result => {
            if (result === true) {
                alert('Thêm mới thành công');
                this.uploadComplete();
                this.clearForm();
                this.modalReference.dismiss();
            } else {
                alert('Mã nhân viên không hợp lệ');
            }
        });
    }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            this.clearForm();
            this.submitted = false;
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            this.clearForm();
            this.submitted = false;
            return 'by clicking on a backdrop';
        } else {
            this.clearForm();
            this.submitted = false;
            return `with: ${reason}`;
        }
    }
}
