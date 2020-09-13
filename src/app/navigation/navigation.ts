import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'dashboard',
                title    : 'Dashboard',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'dashboard',
                url      : '/dashboard',
            },
            {
                id       : 'invoices',
                title    : 'Invoices',
                translate: 'NAV.INVOICES.TITLE',
                type     : 'item',
                icon     : 'attach_money',
                url      : '/invoices',
            },

            {
                id       : 'banks',
                title    : 'Banks',
                translate: 'NAV.BANKS.TITLE',
                type     : 'item',
                icon     : 'account_balance_wallet',
                url      : '/banks'
            },

            {
                id       : 'holders',
                title    : 'Holders',
                translate: 'NAV.HOLDERS.TITLE',
                type     : 'item',
                icon     : 'face',
                url      : '/holders'
            },
            {
                id       : 'chequing',
                title    : 'Chequing Account',
                translate: 'NAV.CHEQUING.TITLE',
                type     : 'item',
                icon     : 'account_balance',
                url      : '/chequing'
            },
            {
                id       : 'cards',
                title    : 'Cards',
                translate: 'NAV.CARDS.TITLE',
                type     : 'item',
                icon     : 'credit_card',
                url      : '/cards'
            },
            {
                id       : 'companies',
                title    : 'Companies',
                translate: 'NAV.COMPANIES.TITLE',
                type     : 'item',
                icon     : 'business',
                url      : '/companies'
            },
            {
                id       : 'types',
                title    : 'Types',
                translate: 'NAV.TYPES.TITLE',
                type     : 'item',
                icon     : 'category',
                url      : '/types'
            }

        ]
    }
];
