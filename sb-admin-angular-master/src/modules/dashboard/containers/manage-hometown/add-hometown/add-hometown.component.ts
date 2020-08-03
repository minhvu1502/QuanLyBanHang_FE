import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { QueQuanService } from '@modules/dashboard/services/que-quan.service';

@Component({
  selector: 'sb-add-hometown',
  templateUrl: './add-hometown.component.html',
  styleUrls: ['./add-hometown.component.scss']
})
export class AddHometownComponent implements OnInit {
  @ViewChild('content') public childModal!: ModalDirective;
  @Output() uploaded = new EventEmitter<string>();
  modalReference!: any;
  closeResult = '';
  listQue!: any[];
  IsShow = true;
  submitted = false;
  formAdd = new FormGroup({
      maQue: new FormControl('', [Validators.required]),
      tenQue: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      // status: new FormControl('', Validators.required),
  });
    constructor(private modalService: NgbModal, private queService: QueQuanService) {}
  clearForm(): void {
      this.formAdd.controls.maQue.setValue('');
      this.formAdd.controls.tenQue.setValue('');
      this.formAdd.controls.status.setValue('');
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
          size: 'md ',
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
  addHometown(): void {
    this.submitted = true;
    if (this.formAdd.invalid) {
      return;
    }
    const maQue = this.formAdd.get('maQue')?.value;
        const filterResult = this.listQue.filter(x => x.maQue === maQue);
        if (filterResult.length > 0) {
          alert('Mã Quê đã tồn tại');
          return;
        }
      const hometown: any = {
          maQue: this.formAdd.get('maQue')?.value,
          tenQue: this.formAdd.get('tenQue')?.value,
          status: this.formAdd.get('status')?.value,
      };
      console.log(hometown);
        this.queService.AddHometown(hometown).subscribe(val => {
          if (val === true) {
            alert('Thêm mới thành công');
            this.clearForm();
            this.modalReference.dismiss();
            this.uploadComplete();
          }
        }
      );
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
