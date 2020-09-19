import { CompanyListComponent } from './list/company-list.component';
import { CompanyDetailsComponent } from './details/company-details.component';

export const CompanyRoutes = [
    {
        path: '',
        component: CompanyListComponent
    },
    {
        path: 'list',
        component: CompanyListComponent
    },
    {
        path: 'create',
        component: CompanyDetailsComponent
    },
    {
        path: 'details/:uuid',
        component: CompanyDetailsComponent
    }
];
