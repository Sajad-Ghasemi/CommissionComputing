import { Component } from '@angular/core';
import { BaseComponent } from '../../base.component';

@Component({
    selector: 'app-master',
    templateUrl: './master.component.html'
})
export class MasterComponent extends BaseComponent {
    constructor(){
        super();
    }
}