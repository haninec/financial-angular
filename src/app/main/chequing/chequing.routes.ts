import { ChequingListComponent } from './list/chequing-list.component';
import { ChequingDetailsComponent } from './details/chequing-details.component';



export const ChequingRoutes = [
    {
        path: '',
        component: ChequingListComponent
    },
    {
        path: 'list',
        component: ChequingListComponent
    },
    {
        path: 'create',
        component: ChequingDetailsComponent
    },
    {
        path: 'details/:uuid',
        component: ChequingDetailsComponent
    }
];
