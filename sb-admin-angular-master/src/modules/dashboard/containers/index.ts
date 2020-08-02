import { from } from 'rxjs';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LightComponent } from './light/light.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { ManageHometownComponent } from './manage-hometown/manage-hometown.component';
import { StaticComponent } from './static/static.component';

export const containers = [
    DashboardComponent,
    StaticComponent,
    LightComponent,
    ManageEmployeesComponent,
    ManageHometownComponent,
];

export * from './dashboard/dashboard.component';
export * from './static/static.component';
export * from './light/light.component';
export * from './manage-employees/manage-employees.component';
export * from './manage-hometown/manage-hometown.component';
