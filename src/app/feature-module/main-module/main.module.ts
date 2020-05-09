import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MasterComponent } from './master-component/master.component';
import { DashboardComponent } from './dashboard-component/dashboard.component';
import { LibModule } from '../lib-module';

@NgModule({
  declarations: [
    MasterComponent,
    DashboardComponent
  ],
  imports: [
    MainRoutingModule,
    LibModule
  ],
  providers: [],
  bootstrap: []
})
export class MainModule { }
