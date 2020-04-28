import { Component, OnInit } from '@angular/core';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Todo } from 'src/app/core/interfaces';
import { UserService } from 'src/app/core/services/user/user.service';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  userList: Array<Todo>

  private unsubscribe = new Subject();

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  // getUsers() {
  //   // this.userList = this.userService.getUser
  // }

  private getUsers(): void {
    this.userService.getUsers()
    .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        data => [
          this.userList = data
        ],
        error => console.error(error)
      );
  }

}
