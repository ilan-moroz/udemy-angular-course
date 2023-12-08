import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrl: './display-details.component.css',
})
export class DisplayDetailsComponent {
  showDetails = false;
  clicksArray: string[] = [];
  clicksLonger = false;

  longerThen5() {
    this.clicksLonger = this.clicksArray.length >= 5;
  }

  onClick() {
    var d = new Date();
    var n = d.toLocaleTimeString();
    this.showDetails = !this.showDetails;
    this.clicksArray.unshift(n);
    this.longerThen5();
  }

  colorStyle() {
    return this.clicksArray.length >= 5 ? 'blue' : 'transparent';
  }
}
