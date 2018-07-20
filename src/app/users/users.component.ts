import { Component, OnInit, Input } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    // フォームとモデルを結びつける
    @Input() user: User = new User();

    // コンストラクタ処理
    constructor(private userService: UserService, private router: Router) { }
    ngOnInit() {}

    add(): void {

        // 入力項目すべて入っていれば登録に進む
        if (!this.user.username || !this.user.email || !this.user.password) { return; }

        // ユーザー登録
        this.userService.addUser(this.user)
                        .subscribe(
                            user => this.user = user
                        );

        // 登録完了画面に遷移する
        this.router.navigate(['user-registrated']);

        console.log('メアド' +  this.user.email);
    }

    /*
    add(): void {
        name = this.user.name.trim();
        if (!name) { return; }
        this.UserService.addHero({ name } as Hero)
          .subscribe(hero => {
            this.heroes.push(hero);
          });
    }
    */
}
