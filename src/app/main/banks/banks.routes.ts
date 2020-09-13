import { BankListComponent } from './list/bank-list.component';
import { BankDetailsComponent } from './details/bank-details.component';


export const BanksRoutes = [
    {
        path: '',
        component: BankListComponent
    },
    {
        path: 'list',
        component: BankListComponent
    },
    {
        path: 'create',
        component: BankDetailsComponent
    },
    {
        path: 'details/:uuid',
        component: BankDetailsComponent
    }
];
