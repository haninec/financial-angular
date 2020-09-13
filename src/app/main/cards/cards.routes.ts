import { CardListComponent } from './list/card-list.component';
import { CardDetailsComponent } from './details/card-details.component';



export const CardsRoutes = [
    {
        path: '',
        component: CardListComponent
    },
    {
        path: 'list',
        component: CardListComponent
    },
    {
        path: 'create',
        component: CardDetailsComponent
    },
    {
        path: 'details/:uuid',
        component: CardDetailsComponent
    }
];
