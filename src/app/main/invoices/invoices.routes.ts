import { InvoiceListComponent } from './list/invoice-list.component';
import { InvoiceDetailsComponent } from './details/invoice-details.component';
import { InvoiceSearchComponent } from './search/invoice-search.component';



export const InvoicesRoutes = [
    {
        path: '',
        component: InvoiceSearchComponent
    },
    {
        path: 'list',
        component: InvoiceListComponent
    },
    {
        path: 'create',
        component: InvoiceDetailsComponent
    },
    {
        path: 'details/:uuid',
        component: InvoiceDetailsComponent
    }
];
