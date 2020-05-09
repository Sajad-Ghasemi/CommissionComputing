import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard-component/dashboard.component';
import { MasterComponent } from './master-component/master.component';


const routes: Routes = [
    {
        path: '', component: MasterComponent, children: [
            { path: '', component: DashboardComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
