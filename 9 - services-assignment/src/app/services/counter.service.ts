import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  count = 0;

  constructor() {}

  @HostListener('click') onClick() {
    this.count++;
  }

  logCount() {
    console.log(this.count);
  }
}
