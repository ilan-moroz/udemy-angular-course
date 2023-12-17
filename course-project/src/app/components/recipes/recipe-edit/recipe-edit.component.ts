import { Recipe } from './../recipe.modal';
import { Component } from '@angular/core';
import { RecipeService } from '../../../services/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css',
})
export class RecipeEditComponent {
  id: number;
  recipe: Recipe;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private rService: RecipeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let recipeImg = '';
    let recipeDesc = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.rService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImg = recipe.imagePath;
      recipeDesc = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name),
              amount: new FormControl(ingredient.amount),
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName),
      imagePath: new FormControl(recipeImg),
      description: new FormControl(recipeDesc),
      ingredients: recipeIngredients,
    });
  }

  onSub() {
    console.log(this.recipeForm);
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
}
