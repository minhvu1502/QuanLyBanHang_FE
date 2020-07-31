import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ManageEmployeesService } from '@modules/dashboard/services/manage-employees.service';

@Component({
  selector: 'sb-delete-employee',
  templateUrl: './delete-employee.component.html',
    styleUrls: ['./delete-employee.component.scss'],
})
export class DeleteEmployeeComponent implements OnInit {
  @ViewChild('content') public childModal!: ModalDirective;
  @Output() uploaded = new EventEmitter<string>();
  modalReference: any;
  closeResult: any;
  maNhanVien: any;
  ngOnInit(): void {
  }
  constructor(private modalService: NgbModal, private employeeService: ManageEmployeesService) {}
    delete(Id: any): void {
        this.open(this.childModal);
        this.maNhanVien = Id;
    }
  uploadComplete() {
    this.uploaded.emit('complete');
}
  submitDelete(): void{
    console.log(this.maNhanVien);
    this.employeeService.DeleteEmployee(this.maNhanVien).subscribe(result => {
      if (result === true) {
                alert('Xóa thành công');
                this.uploadComplete();
                this.modalReference.dismiss();
      } else {
        alert('Xóa thất bại');
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
}
