import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { QueQuanService } from '@modules/dashboard/services/que-quan.service';

@Component({
  selector: 'sb-edit-status',
  templateUrl: './edit-status.component.html',
  styleUrls: ['./edit-status.component.scss']
})
export class EditStatusComponent implements OnInit {

  @ViewChild('content') public childModal!: ModalDirective;
    @Output() uploaded = new EventEmitter<string>();
    modalReference: any;
    closeResult: any;
    queQuan: any;
    constructor(private modalService: NgbModal, private homeService: QueQuanService) {}
    update1(item: any): void {
        this.queQuan = item;
        this.open(this.childModal);
    }
    uploadComplete() {
        this.uploaded.emit('complete');
    }
    submitStatus(): void {
        const status: any = {
            maQue: this.queQuan.maQue,
            Status: this.queQuan.trangThai,
        };
        console.log(status);
        this.homeService.UpdateStatus(status).subscribe(result => {
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
