import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrl: './display-details.component.css',
})
export class DisplayDetailsComponent {
  showDetails = false;
  clicksArray: string[] = [];

  onClick() {
    const d = new Date();
    const n = d.toLocaleTimeString();
    this.showDetails = !this.showDetails;
    this.clicksArray.unshift(n);
  }

  colorStyle(i: number) {
    return i >= 4 ? 'blue' : 'transparent';
  }
}
