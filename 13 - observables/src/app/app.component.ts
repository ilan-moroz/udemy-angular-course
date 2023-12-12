import { Subscription } from 'rxjs';
import { UserService } from './user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activeSub: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activeSub = this.userService.activatedEmitter.subscribe((active) => {
      this.userActivated = active;
    });
  }

  ngOnDestroy(): void {
    this.activeSub.unsubscribe();
  }
}
