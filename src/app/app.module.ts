import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './feature-module/home-module/login-component/login.component';
import { NotFoundComponent } from './feature-module/not-found-component/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { LibModule } from './feature-module/lib-module';
import { FormsModule } from '@angular/forms';
import { AuthenticationGuard } from './core/guards/authentication.guard';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    LibModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthenticationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
