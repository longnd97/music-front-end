import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isLogin = localStorage.getItem('token');
    if (!isLogin) {
      alert("Bạn cần phải đăng nhập để thực hiện tính năng này");
      if (confirm('Chuyển tới trang đăng nhập?')) {
        this.router.navigate(['login']);
      }
      return false;
    }
    return true;
  }

}
