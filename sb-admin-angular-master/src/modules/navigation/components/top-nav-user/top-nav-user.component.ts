import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from '@modules/auth/services';

@Component({
    selector: 'sb-top-nav-user',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav-user.component.html',
    styleUrls: ['top-nav-user.component.scss'],
})
export class TopNavUserComponent implements OnInit {
    constructor() {}
    user: any;
    ngOnInit() {  
         // tslint:disable-next-line: no-non-null-assertion
         const myData = JSON.parse(sessionStorage.getItem('user')!);
         console.log(myData);
         this.user = myData;
    }
    getUser() {}
    Logout(): void {
        sessionStorage.removeItem('user');
    }
}
