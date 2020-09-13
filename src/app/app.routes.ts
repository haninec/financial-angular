import { Routes } from '@angular/router';
import { AuthGuardService } from './shared/guards/authguard.service';

export const AppRoutes: Routes = [

    {
        path: '',
        loadChildren: () => import('./main/authentications/authentications.module').then(m => m.AuthenticationsModule)
    },
    {
        path: '',
        canActivate: [AuthGuardService],
        children: [
            
            {
                path: 'dashboard',
                loadChildren: () => import('./main/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'invoices',
                loadChildren: () => import('./main/invoices/invoices.module').then(m => m.InvoicesModule)
            },
            {
                path: 'banks',
                loadChildren: () => import('./main/banks/banks.module').then(m => m.BanksModule)
            },
            {
                path: 'holders',
                loadChildren: () => import('./main/holders/holders.module').then(m => m.HoldersModule)
            },
            {
                path: 'chequing',
                loadChildren: () => import('./main/chequing/chequing.module').then(m => m.ChequingModule)
            },
            {
                path: 'cards',
                loadChildren: () => import('./main/cards/cards.module').then(m => m.CardsModule)
            },
            {
                path: 'companies',
                loadChildren: () => import('./main/companies/companies.module').then(m => m.CompaniesModule)
            },
            {
                path: 'types',
                loadChildren: () => import('./main/types/types.module').then(m => m.TypesModule)
            },

        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
