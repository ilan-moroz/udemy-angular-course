import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  chosenRecipe: Recipe;

  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Test',
      'test recipe',
      'https://marketplace.canva.com/EAFEGwki5iw/2/0/1067w/canva-white-yellow-clean-modern-brulle-cheese-cake-recipe-card-ZLMW2pkhjjg.jpg'
    ),
  ];

  onRecipeSelect(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
