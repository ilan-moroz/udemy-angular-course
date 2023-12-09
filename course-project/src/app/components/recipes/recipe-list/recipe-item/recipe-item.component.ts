import { Recipe } from './../../recipe.modal';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  @Output() recipeSelect = new EventEmitter<void>();

  onRecipeSelect(recipe: Recipe) {
    this.recipeSelect.emit();
  }
}
