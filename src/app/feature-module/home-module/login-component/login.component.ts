import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/feature-module/base.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent extends BaseComponent {
    constructor(private router: Router) {
        super();
    }

    username: string;
    password: string;

    ngOnInit() {
    }

    login(): void {
        if (this.username == 'admin' && this.password == 'admin') {
            this.router.navigate(["pages"]);
        } else {
            alert("Invalid credentials");
        }
    }
}