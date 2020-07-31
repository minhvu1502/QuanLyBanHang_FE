import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoginGuard implements CanActivate {
    constructor(private router: Router) {}
  public canActivate(): Observable<boolean> {
        const x = localStorage.getItem('user');
      if (x != null) {
        this.router.navigateByUrl('/dashboard');
        return of(false);
      }
        return of(true);
    }
}
