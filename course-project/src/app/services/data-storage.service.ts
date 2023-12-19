import { RecipeService } from './recipe.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../components/recipes/recipe.modal';
import { map, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  baseUrl =
    'https://anuglar-http-91731-default-rtdb.europe-west1.firebasedatabase.app';

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  saveRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.baseUrl + '/recipes.json', recipes).subscribe((res) => {
      console.log(res);
    });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(this.baseUrl + '/recipes.json').pipe(
      // Transform the incoming recipes array using 'map'
      map((recipes) => {
        // Iterate over each recipe to ensure it has an ingredients array
        return recipes.map((recipe) => {
          // If 'ingredients' property is missing, add an empty array
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      // Perform a side effect with 'tap': Update the recipes in the recipeService
      tap((recipes) => {
        this.recipeService.setRecipes(recipes);
      })
    );
  }
}
