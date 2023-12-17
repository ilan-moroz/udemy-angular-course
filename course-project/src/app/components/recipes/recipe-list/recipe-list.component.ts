import { RecipeService } from './../../../services/recipe.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit, OnDestroy {
  constructor(private recipeService: RecipeService) {}

  recipes: Recipe[];
  sub: Subscription;

  ngOnInit(): void {
    this.sub = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
