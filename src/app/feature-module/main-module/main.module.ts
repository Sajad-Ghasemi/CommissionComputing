import { SaleDeadlineService } from './../../core/http-services/sale-deadline.service';
import { ListSaleDeadlineComponent } from './sale-deadline/list/list-sale-deadline.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MasterComponent } from './master-component/master.component';
import { DashboardComponent } from './dashboard-component/dashboard.component';
import { LibModule } from '../lib-module';
import { AddSaleDeadlineComponent } from './sale-deadline/add/add-sale-deadline.component';
import { MatSelectModule } from '@angular/material';


@NgModule({
  declarations: [
    MasterComponent,
    DashboardComponent,
    AddSaleDeadlineComponent,
    ListSaleDeadlineComponent
  ],
  imports: [
    MainRoutingModule,
    LibModule
  ],
  providers: [SaleDeadlineService],
  bootstrap: []
})
export class MainModule { }
