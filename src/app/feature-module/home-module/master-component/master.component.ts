import { Component } from '@angular/core';
import { BaseComponent } from '../../base.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-master',
    templateUrl: './master.component.html',
    styleUrls: ['master.component.scss']
})
export class MasterHomeComponent extends BaseComponent {
    constructor(private router: Router){
        super();
    }

    onLogin(){
        this.router.navigate(["login"]);
    }

    onMaster(){
        this.router.navigate([""]);
    }
}