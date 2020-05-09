import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LibModule } from '../lib-module';
import { MasterHomeComponent } from './master-component/master.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home-component/home.component';
import { LoginComponent } from './login-component/login.component';

@NgModule({
  declarations: [
    MasterHomeComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    HomeRoutingModule,
    LibModule
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
