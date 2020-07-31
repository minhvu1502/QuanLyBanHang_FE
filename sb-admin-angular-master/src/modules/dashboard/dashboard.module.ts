/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule, Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { ChartsModule } from '@modules/charts/charts.module';
import { TablesModule } from '@modules/tables/tables.module';
import { NgxSpinnerModule } from 'ngx-spinner';

/* Components */
import * as dashboardComponents from './components';

/* Containers */
import * as dashboardContainers from './containers';

/* Guards */
import * as dashboardGuards from './guards';

/* Services */
import * as dashboardServices from './services';
import { EditEmployeesComponent } from './containers/manage-employees/edit-employees/edit-employees.component';
import { AddEmployeeComponent } from './containers/manage-employees/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './containers/manage-employees/delete-employee/delete-employee.component';
import { UpdateStatusComponent } from './containers/manage-employees/update-status/update-status.component';
import { ShowDetailComponent } from './containers/manage-employees/show-detail/show-detail.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
        ChartsModule,
        TablesModule,
        NgxSpinnerModule,
    ],
    providers: [
        ...dashboardServices.services,
        dashboardGuards.guards,
        Location,
        { provide: LocationStrategy, useClass: PathLocationStrategy },
    ],
    declarations: [
        ...dashboardContainers.containers,
        ...dashboardComponents.components,
        EditEmployeesComponent,
        AddEmployeeComponent,
        DeleteEmployeeComponent,
        UpdateStatusComponent,
        ShowDetailComponent,
    ],
    exports: [...dashboardContainers.containers, ...dashboardComponents.components],
})
export class DashboardModule {}
