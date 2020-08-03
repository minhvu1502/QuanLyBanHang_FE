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
import { Ng2SearchPipeModule } from 'ng2-search-filter';
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
import { ManageHometownComponent } from './containers/manage-hometown/manage-hometown.component';
import { AddHometownComponent } from './containers/manage-hometown/add-hometown/add-hometown.component';
import { EditHometownComponent } from './containers/manage-hometown/edit-hometown/edit-hometown.component';
import { DeleteHometownComponent } from './containers/manage-hometown/delete-hometown/delete-hometown.component';

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
        Ng2SearchPipeModule,
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
        ManageHometownComponent,
        AddHometownComponent,
        EditHometownComponent,
        DeleteHometownComponent,
    ],
    exports: [...dashboardContainers.containers, ...dashboardComponents.components],
})
export class DashboardModule {}
