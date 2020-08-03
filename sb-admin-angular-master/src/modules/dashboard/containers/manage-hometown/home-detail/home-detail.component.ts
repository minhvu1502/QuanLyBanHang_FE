import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'sb-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {

  @ViewChild('content') public modalChild!: ModalDirective;
  modalReference: any;
  closeResult: any;
  homeTown: any;
  formShow: FormGroup = new FormGroup({
    maQue: new FormControl('', Validators.required),
    tenQue: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
});
  constructor(private modalService: NgbModal) { }
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
show(item: any): void{
  this.open(this.modalChild);
  this.formShow.controls.tenQue.setValue(item.tenQue);
  this.formShow.controls.status.setValue(item.trangThai);
}
  ngOnInit(): void {
  }

}
