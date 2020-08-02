/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { DashboardModule } from './dashboard.module';

/* Containers */
import * as dashboardContainers from './containers';

/* Guards */
import * as dashboardGuards from './guards';
import { DashboardGuard } from './guards/dashboard.guard';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'Dashboard - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [DashboardGuard],
        component: dashboardContainers.DashboardComponent,
    },
    {
        path: 'employees',
        data: {
            title: 'Quản Lý Nhân Viên',
        } as SBRouteData,
        canActivate: [DashboardGuard],
        component: dashboardContainers.ManageEmployeesComponent,
    },
    {
        path: 'static',
        data: {
            title: 'Dashboard Static - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Static',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [DashboardGuard],
        component: dashboardContainers.StaticComponent,
    },
    {
        path: 'light',
        data: {
            title: 'Dashboard Light - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Light',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [DashboardGuard],
        component: dashboardContainers.LightComponent,
    },
    {
        path: 'hometown',
        data: {
            title: 'Quản Lý Quê Quán',
        } as SBRouteData,
        canActivate: [DashboardGuard],
        component: dashboardContainers.ManageHometownComponent,
    },
];
@NgModule({
    imports: [DashboardModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}
