import { Component, OnInit, Input } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
    selector: 'app-users-registrated',
    templateUrl: './usersRegistrated.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersRegistratedComponent implements OnInit {

    @Input() user: User;

    ngOnInit() {
        let a = this.user;
    }
}
