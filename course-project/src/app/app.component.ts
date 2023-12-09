import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  showRecipe = true;
  showList = false;

  onNavChange(data: { showRecipe: boolean; showList: boolean }) {
    this.showRecipe = data.showRecipe;
    this.showList = data.showList;
  }
}
