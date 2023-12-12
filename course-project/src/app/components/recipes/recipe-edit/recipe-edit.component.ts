import { Recipe } from './../recipe.modal';
import { Component } from '@angular/core';
import { RecipeService } from '../../../services/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css',
})
export class RecipeEditComponent {
  id: number;
  recipe: Recipe;
  editMode = false;

  constructor(private rService: RecipeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      // this.recipe = this.rService.getRecipe(this.id);
      console.log(this.editMode);
    });
  }
}
