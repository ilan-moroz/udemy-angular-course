import { RecipeService } from './recipe.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  baseUrl =
    'https://anuglar-http-91731-default-rtdb.europe-west1.firebasedatabase.app';

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  saveRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.baseUrl + '/recipes.json', recipes).subscribe((res) => {
      console.log(res);
    });
  }
}
