import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard-component/dashboard.component';
import { MasterComponent } from './master-component/master.component';
import { AuthenticationGuard } from '../../core/guards/authentication.guard';
import { AddSaleDeadlineComponent } from './sale-deadline/add/add-sale-deadline.component';
import { ListSaleDeadlineComponent } from './sale-deadline/list/list-sale-deadline.component';
import { AddFactorComponent } from './factor/add/add-factor.component';



const routes: Routes = [
    {
        path: '', component: MasterComponent, canActivate: [AuthenticationGuard], children: [
            { path: '', component: DashboardComponent },
            { path: 'deadline/add', component: AddSaleDeadlineComponent },
            { path: 'deadline/list', component: ListSaleDeadlineComponent },
            { path: 'factor/add', component: AddFactorComponent }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
