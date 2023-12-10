import { RecipeService } from './../../../services/recipe.service';
import { Recipe } from './../recipe.modal';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;

  constructor(private rService: RecipeService) {}

  onAddToShopping() {
    this.rService.addToShoppingList(this.recipe.ingredients);
  }
}
