import { RecipeService } from './../../../../services/recipe.service';
import { Recipe } from './../../recipe.modal';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() index: number;
}
