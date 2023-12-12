import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

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
        if (count === 3) observer.complete();
        if (count > 1) observer.error(new Error('count exceeded'));
        count++;
      }, 1000);
    });

    // Subscribing to the Observable to receive emitted values
    this.obsSub = customIntervalObs
      .pipe(
        filter((data) => +data > 0), // Filter out values where data is greater than 0
        map((data: number) => 'Round: ' + (data + 1)) // Map the number to a string
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          console.log('Completed!');
        }
      );
  }

  ngOnDestroy(): void {
    this.obsSub.unsubscribe();
  }
}
