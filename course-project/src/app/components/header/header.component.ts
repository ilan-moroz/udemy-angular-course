import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() navChange = new EventEmitter<{
    showRecipe: boolean;
    showList: boolean;
  }>();

  onRecipesClick() {
    this.navChange.emit({
      showRecipe: true,
      showList: false,
    });
  }

  onListClick() {
    this.navChange.emit({
      showRecipe: false,
      showList: true,
    });
  }
}
