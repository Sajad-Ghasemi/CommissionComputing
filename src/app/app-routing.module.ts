import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './feature-module/not-found-component/not-found.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./feature-module/home-module/home.module').then(m => m.HomeModule) },
  { path: 'pages', loadChildren: () => import('./feature-module/main-module/main.module').then(m => m.MainModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
