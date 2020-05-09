import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterHomeComponent } from './master-component/master.component';
import { HomeComponent } from './home-component/home.component';
import { LoginComponent } from './login-component/login.component';


const routes: Routes = [
    {
        path: '', component: MasterHomeComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'login', component: LoginComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
