import { HolderListComponent } from './list/holder-list.component';
import { HolderDetailsComponent } from './details/holder-details.component';



export const HoldersRoutes = [
    {
        path: '',
        component: HolderListComponent
    },
    {
        path: 'list',
        component: HolderListComponent
    },
    {
        path: 'create',
        component: HolderDetailsComponent
    },
    {
        path: 'details/:uuid',
        component: HolderDetailsComponent
    }
];
