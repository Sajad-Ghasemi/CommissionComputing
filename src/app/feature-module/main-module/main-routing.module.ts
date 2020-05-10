import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard-component/dashboard.component';
import { MasterComponent } from './master-component/master.component';
import { AuthenticationGuard } from '../../core/guards/authentication.guard';


const routes: Routes = [
    {
        path: '', component: MasterComponent, canActivate: [AuthenticationGuard], children: [
            { path: '', component: DashboardComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
