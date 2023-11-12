import {
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { ApiService } from '../service/api.service';

@Injectable({
  providedIn: 'root',
})
export class GuardianGuard implements CanActivateChild {
  constructor(private apiService: ApiService, private router: Router) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.apiService.isAuthenticated()) {
      alert('No estas logueado');
      this.router.navigate(['/public/acceder']);
      return false;
    }
    return true;
  }
}
