import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  count = 0;

  constructor() {}

  logCount() {
    this.count++;
    console.log(this.count);
  }
}
