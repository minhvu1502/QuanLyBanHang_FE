import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QueQuanService } from '@modules/dashboard/services/que-quan.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { last } from 'rxjs/operators';

@Component({
    selector: 'sb-edit-hometown',
    templateUrl: './edit-hometown.component.html',
    styleUrls: ['./edit-hometown.component.scss'],
})
export class EditHometownComponent implements OnInit {
    @ViewChild('content') modal!: ModalDirective;
    @Output() uploaded = new EventEmitter<string>();
    formEdit: FormGroup = new FormGroup({
        maQue: new FormControl('', Validators.required),
        tenQue: new FormControl('', Validators.required),
        status: new FormControl('', Validators.required),
    });
    item: any;
    modalReference: any;
    closeResult: any;
    submitted = false;
    constructor(private modalService: NgbModal, private queService: QueQuanService) {}
    show(item: any){
    this.item = item;
    console.log(item);
      this.formEdit.controls.maQue.setValue(item.maQue);
      this.formEdit.controls.tenQue.setValue(item.tenQue);
      this.formEdit.controls.status.setValue(item.trangThai);
      this.open(this.modal);
    }
    uploadComplete() {
        this.uploaded.emit('complete');
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
    editHomeTown() {
      this.submitted = true;
      if (this.formEdit.invalid) {
          return;
      }
      const hometown = {
            maQue: this.formEdit.get('maQue')?.value,
            tenQue: this.formEdit.get('tenQue')?.value,
            trangThai: this.formEdit.get('status')?.value,
      }
      console.log(hometown);
        this.queService.EditHomeTown(hometown).subscribe(val => {
              if (val === true) {
                alert('Sửa thành công');
                this.uploadComplete();
        this.modalReference.dismiss();
            } else {
                alert('Sửa thất bại');
            }
        });
    }
  
    ngOnInit(): void {}
}
