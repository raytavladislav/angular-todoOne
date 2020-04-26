import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserInterface } from 'src/app/core/interfaces/user.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userId: number;
  user: UserInterface;

  private unsubscribe = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUserId();
  }


  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private getUserId(): void {
    this.activatedRoute.params
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      params => {
        this.getUser(params.userId);
      }
    )
  }

  private getUser(userId: number): void {
    this.userService.getUser(userId)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      (data) =>{
        this.user = data;
      })
  }
}
