import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class DashboardGuard implements CanActivate {
    constructor(private router: Router) {}
    public canActivate(): Observable<boolean> {
        const x = sessionStorage.getItem('user');
        console.log(x);
        if (x === null) {
            alert('Bạn chưa đăng nhập');
            this.router.navigateByUrl('/auth/login');
            return of(false);
        }
        return of(true);
    }
}
