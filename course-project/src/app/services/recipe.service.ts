import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../components/recipes/recipe.modal';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor() {}

  private recipes: Recipe[] = [
    new Recipe(
      'Test',
      'test recipe',
      'https://marketplace.canva.com/EAFEGwki5iw/2/0/1067w/canva-white-yellow-clean-modern-brulle-cheese-cake-recipe-card-ZLMW2pkhjjg.jpg'
    ),
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }
}
