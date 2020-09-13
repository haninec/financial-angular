import { TypeListComponent } from './list/type-list.component';
import { TypeDetailsComponent } from './details/type-details.component';



export const TypesRoutes = [
    {
        path: '',
        component: TypeListComponent
    },
    {
        path: 'list',
        component: TypeListComponent
    },
    {
        path: 'create',
        component: TypeDetailsComponent
    },
    {
        // path: 'details/:id',
        path: 'details/:uuid',
        component: TypeDetailsComponent
    }
];
