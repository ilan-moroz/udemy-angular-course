import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  {
    path: 'recipes',
    loadChildren: () =>
      import('./components/recipes/recipes.module').then(
        (mod) => mod.RecipesModule
      ),
  },
  {
    path: 'shopping-list',
    loadChildren: () =>
      import('./components/shopping-list/shopping-list.module').then(
        (mod) => mod.ShoppingListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
