import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginModel } from '@modules/auth/models/login-model';
import { ReturnResult } from '@modules/auth/models/return-result';
import { LoginService } from '@modules/auth/services/login.service';
import { User } from '@testing/mocks';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginModel: LoginModel = {
        username: '',
        password: '',
        rememberMe: false,
    };
    userName!: string;
    passWord!: string;
    message = 'Tài khoản không tồn tại';
    message1 = 'Mật khẩu không đúng';
    checkUsername = false;
    checkPassword = false;
    submitted = false;
    check: any;
    returnResult: any;
    formLogin = new FormGroup({
        userName: new FormControl('', [Validators.required]),
        passWord: new FormControl('', [Validators.required]),
    });
    constructor(private loginService: LoginService, private router: Router) {
    }
    ngOnInit() {}
    Login(): void {
        this.submitted = true;
        if (this.formLogin.invalid) {
            return;
        }
        this.userName = this.formLogin.get('userName')?.value;
        this.passWord = this.formLogin.get('passWord')?.value;
        this.loginModel = {
            username: this.userName,
            password: this.passWord,
        };
        this.loginService.CheckLogin(this.loginModel).subscribe(result => {
            const x = this.checkValid(result);
            if (x === 1) {
                localStorage.setItem('user', JSON.stringify(this.loginModel));
            }
        });
    }
    checkValid(check: number): number {
        console.log(check);
        if (check === 1) {
            this.router.navigateByUrl('/dashboard');
            return 1;
        }
        if (check === 0) {
            alert('Tài khoản không tồn tại');
        }
        if (check === 2) {
            alert('Mật khẩu không đúng');
        }
        return 0;
    }
}
