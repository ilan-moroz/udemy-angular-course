import { Component } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.modal';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('tomato', 10),
  ];

  onAddIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
