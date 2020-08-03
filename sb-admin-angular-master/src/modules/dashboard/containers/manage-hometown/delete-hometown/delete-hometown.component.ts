import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { QueQuanService } from '@modules/dashboard/services/que-quan.service';

@Component({
  selector: 'sb-delete-hometown',
  templateUrl: './delete-hometown.component.html',
    styleUrls: ['./delete-hometown.component.scss'],
})
export class DeleteHometownComponent implements OnInit {
  @ViewChild('content') childModal!: ModalDirective;
  @Output() uploaded = new EventEmitter<string>();
    constructor(private modalService: NgbModal, private queService: QueQuanService) {}
  modalReference: any;
  closeResult: any;
  maQue: any;
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
uploadComplete() {
  this.uploaded.emit('complete');
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
    show(maQue: any) {
      this.maQue = maQue;
  this.open(this.childModal);
  
}
submitDelete(){
  console.log(this.maQue);
  this.queService.DeleteHomeTown(this.maQue).subscribe(
    val => {
      console.log(val);
      if (val === true) {
        alert('Delete Success');
        this.uploadComplete();
        this.modalReference.dismiss();
      } else{
        alert('Delete Error');
      }
    }
  );
}
  ngOnInit(): void {
  }

}
