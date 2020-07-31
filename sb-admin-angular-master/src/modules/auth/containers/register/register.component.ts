import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '@modules/auth/models/account';
import { AccountService } from '@modules/auth/services/account.service';

@Component({
    selector: 'sb-register',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './register.component.html',
    styleUrls: ['register.component.scss'],
})
export class RegisterComponent implements OnInit {
    formRegister!: FormGroup;
    submitted = false;
    checkcf = false;
    accountModel!: Account;
    constructor(private account: AccountService, private router: Router) {
        this.createForm();
    }
    ngOnInit() {}
    Register(): void {
        this.submitted = true;
        if (this.formRegister.invalid) {
            return;
        }
        const Password = this.formRegister.get('inputPassword')?.value;
        const confirmPassword = this.formRegister.get('inputConfirmPassword')?.value;
        if (Password === confirmPassword) {
            this.checkcf = false;
            this.accountModel = {
                Username: this.formRegister.get('inputUserName')?.value,
                Password: this.formRegister.get('inputPassword')?.value,
                Name: this.formRegister.get('inputName')?.value,
                Email: this.formRegister.get('inputEmailAddress')?.value,
            };
            console.log(this.accountModel);
            this.account.Register(this.accountModel).subscribe(result => {
                if (result === true) {
                    alert('Đăng kí thành công');
                    this.router.navigateByUrl('/auth/login');
                } else {
                    alert('Tài khoản đã tồn tại');
                }
            });
        } else {
            this.checkcf = true;
        }
    }
    createForm(): void {
        this.formRegister = new FormGroup({
            inputUserName: new FormControl('', [Validators.required]),
            inputPassword: new FormControl('', [Validators.required]),
            inputName: new FormControl('', [Validators.required]),
            inputEmailAddress: new FormControl('', [Validators.required]),
            inputConfirmPassword: new FormControl('', [Validators.required]),
        });
    }
}
