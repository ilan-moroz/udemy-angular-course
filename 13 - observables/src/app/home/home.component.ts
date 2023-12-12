import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private obsSub: Subscription; // Subscription to manage Observable subscription

  ngOnInit() {
    // this.obsSub = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    // Creating a custom Observable that emits a value every second
    const customIntervalObs = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count); // Emits the current count value
        if (count === 2) observer.complete();
        if (count > 3) observer.error(new Error('count exceeded'));
        count++;
      }, 1000);
    });

    // Subscribing to the Observable to receive emitted values
    this.obsSub = customIntervalObs.subscribe(
      (count) => {
        console.log(count);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        console.log('DONE!@!@!');
      }
    );
  }

  ngOnDestroy(): void {
    this.obsSub.unsubscribe();
  }
}
