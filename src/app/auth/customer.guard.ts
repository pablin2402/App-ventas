import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()

export class CustomerGuard implements CanActivate {
 
  constructor(
    private auth: AuthService,
    private router: Router,
    private afsAuth: AngularFireAuth,

  ) 
  {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<boolean> | boolean {
      return (this.auth.User.map(user => {
        if(user && user.role === 'cliente') {
          return true;
        }
        return this.router.navigate(['/cookies']);
      }))
    }
  
}
