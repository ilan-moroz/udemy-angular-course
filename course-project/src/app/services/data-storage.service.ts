import { RecipeService } from './recipe.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../components/recipes/recipe.modal';
import { exhaustMap, map, take, tap } from 'rxjs';
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
    return this.authService.user.pipe(
      // Take the latest user value from authService's user Subject and complete
      take(1),
      // Use exhaustMap to wait for the user Observable to complete
      // Then, make an HTTP GET request with the user's token as a parameter
      exhaustMap((user) => {
        return this.http.get<Recipe[]>(this.baseUrl + '/recipes.json', {
          params: new HttpParams().set('auth', user.token),
        });
      }),
      // Transform the incoming recipes using 'map'
      map((recipes) => {
        // Iterate over each recipe and return an updated object
        return recipes.map((recipe) => {
          // Use spread syntax to copy each recipe object
          // Add an empty ingredients array if the property doesn't exist
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      // Perform a side effect with 'tap': update the recipeService
      tap((recipes) => {
        this.recipeService.setRecipes(recipes);
      })
    );
  }
}
