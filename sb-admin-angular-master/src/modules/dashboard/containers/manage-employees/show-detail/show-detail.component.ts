import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QueQuanService } from '@modules/dashboard/services/que-quan.service';

@Component({
    selector: 'sb-show-detail',
    templateUrl: './show-detail.component.html',
    styleUrls: ['./show-detail.component.scss'],
})
export class ShowDetailComponent implements OnInit {
  @ViewChild('content') childModal!: ModalDirective;
    constructor(private modalService: NgbModal, private queService: QueQuanService) {}
  modalReference: any;
  closeResult: any;
  listQue!: any[];
  tenQue: any;
  formShow = new FormGroup({
    maNhanVien: new FormControl(),
    dateOfBirth: new FormControl(),
    tenNhanVien: new FormControl('', [Validators.required]),
    gioiTinh: new FormControl(),
    diaChi: new FormControl(),
    dienThoai: new FormControl(),
    queQuan: new FormControl(),
});

  show(item: any): void{
    this.open(this.childModal);
    console.log(item);
   
    this.formShow.controls.maNhanVien.setValue(item.maNhanVien);
    this.formShow.controls.dateOfBirth.setValue(item.ngaySinh);
    this.formShow.controls.tenNhanVien.setValue(item.ten);
    this.formShow.controls.gioiTinh.setValue(item.gioiTinh);
    this.formShow.controls.diaChi.setValue(item.diaChi);
    this.formShow.controls.dienThoai.setValue(item.soDienThoai);
       const x = this.listQue.filter(k => k.maQue === item.maQue);
       this.tenQue = x[0].tenQue;
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
  ngOnInit(): void {
        this.queService.GetAll().subscribe(result => (this.listQue = result));
  }

}
