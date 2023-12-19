import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateFn,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}
  // 'canActivate' is a property of type CanActivateFn
  canActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot, // Information about the route being activated
    state: RouterStateSnapshot // Router state snapshot
  ):
    | Observable<boolean | UrlTree> // Returns an Observable of either boolean or UrlTree
    | Promise<boolean | UrlTree> // Returns a Promise of either boolean or UrlTree
    | boolean // Returns a boolean
    // Returns a UrlTree
    | UrlTree => {
    // Using RxJS 'pipe' to transform the user observable emitted by authService
    return this.authService.user.pipe(
      // take just the last parameter and not subscribe to all changes
      take(1),
      map((user) => {
        const isAuth = !!user; // Checking if the user object is truthy (authenticated)
        if (isAuth) return true; // If authenticated, return true to allow navigation
        // If not authenticated, redirect to the '/auth' route using createUrlTree
        // createUrlTree generates a UrlTree based on the provided route path
        return this.router.createUrlTree(['/auth']);
      })
    );
  };
}
