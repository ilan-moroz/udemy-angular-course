import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs-compat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private obsSub: Subscription;
  constructor() {}

  ngOnInit() {
    // this.obsSub = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    const customIntervalObs = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });

    this.obsSub = customIntervalObs.subscribe((count) => {
      console.log(count);
    });
  }

  ngOnDestroy(): void {
    this.obsSub.unsubscribe();
  }
}
