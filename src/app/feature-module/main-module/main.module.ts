import { AddCommissionComponent } from './Commission/add/add-commission.component';
import { SaleDeadlineService } from './../../core/http-services/sale-deadline.service';
import { ListSaleDeadlineComponent } from './sale-deadline/list/list-sale-deadline.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MasterComponent } from './master-component/master.component';
import { DashboardComponent } from './dashboard-component/dashboard.component';
import { LibModule } from '../lib-module';
import { AddSaleDeadlineComponent } from './sale-deadline/add/add-sale-deadline.component';
import { AddFactorComponent } from './factor/add/add-factor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListCommissionComponent } from './Commission/list/list-commission.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { SearchableDropdownComponent } from '../common/searchable-dropdown/searchable-dropdown.component';

@NgModule({
    declarations: [
        MasterComponent,
        DashboardComponent,
        AddSaleDeadlineComponent,
        ListSaleDeadlineComponent,
        AddFactorComponent,
        AddCommissionComponent,
        ListCommissionComponent,
        SearchableDropdownComponent
    ],
    imports: [
        MainRoutingModule,
        LibModule,
        ReactiveFormsModule,
        NgxMatSelectSearchModule
    ],
    providers: [SaleDeadlineService],
    bootstrap: []
})
export class MainModule { }
