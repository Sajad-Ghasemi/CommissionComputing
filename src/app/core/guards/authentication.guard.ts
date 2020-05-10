import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { StorageService } from '../internal-services/storage.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(private router: Router, private storageService: StorageService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        let token = this.storageService.getItem(StorageService.TOKEN_KEY);
        if (token == null || token == undefined) {
            this.router.navigate(["/login"]);
            return false;
        }
        else {
            return true;
        }

    }
}