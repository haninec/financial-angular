import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

import { BaseDetailsComponent } from 'app/shared/components/base/base-details.component';
import { Invoice } from 'app/shared/models/invoice.models';
import { InvoiceService } from 'app/shared/services/invoice.service';
import { CardService } from 'app/shared/services/card.service';
import { BaseResponse } from 'app/shared/models/base-response.model';
import { CardFilter } from 'app/shared/filters/card.filter';
import { Card } from 'app/shared/models/card.model';
import { CompanyFilter } from 'app/shared/filters/company.filter';
import { CompanyService } from 'app/shared/services/company.service';
import { Company } from 'app/shared/models/company.models';




@Component({
    selector: 'app-invoice-search',
    templateUrl: './invoice-search.component.html',
    styleUrls: ['./invoice-search.component.scss']
})
export class InvoiceSearchComponent extends BaseDetailsComponent<Invoice> implements OnInit, OnDestroy {

    searchForm: FormGroup
    public cards: Card[] = [];
    public companies: Company[] = [];
    public is_incomes: any[] = [
        { is_income: true, value: 'Income' },
        { is_income: false, value: 'Outcome' },
    ];

    // For search
    public pipe = new DatePipe('en-US');
    public start_date: string
    public end_date: string
    public today = new Date();
    public todayString: string;

    constructor(
        private formBuilder: FormBuilder,
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public apiService: InvoiceService,
        public cardService: CardService,
        public companyService: CompanyService,
        public dialog: MatDialog,
        private _snackBar: MatSnackBar) {
        super(router, activatedRoute, apiService, dialog);

        this.baseUrl = 'invoices';
    }

    public ngOnInit(): void {
        super.ngOnInit();
        this.isLoading = true
        this.searchForm = this.formBuilder.group({
            start_date: '',
            end_date: '',
            is_income: '',
            card: '',
            company_id: ''
        });
        this.loadCards();
        this.loadCompanies();
    }

    // LOAD CARDS
    public loadCards(): void {
        const filter = new CardFilter({
            status: true
        });
        this.cardService
            .get(filter.toQueryString())
            .subscribe((response: BaseResponse<Card[]>) => {
                this.cards = response.results;
            });
    }
    // END LOAD CARDS

    // LOAD CARDS
    public loadCompanies(): void {
        const filter = new CompanyFilter({
            pagination: {
                ordering: 'company',
            },
            status: true
        });
        this.companyService
            .get(filter.toQueryString())
            .subscribe((response: BaseResponse<Company[]>) => {
                this.companies = response.results;
                this.afterLoad();
            });
    }
    // END LOAD CARDS

    public newInvoice() {
        this.router.navigateByUrl('invoices/create');
    };

    public search() {
        this.todayString = this.today.toString()
        this.todayString = this.pipe.transform(this.todayString, 'yyyy-MM-dd');
        this.start_date = this.searchForm.value.start_date
        this.start_date = this.pipe.transform(this.start_date, 'yyyy-MM-dd');
        this.end_date = this.searchForm.value.end_date
        this.end_date = this.pipe.transform(this.end_date, 'yyyy-MM-dd');

        if (!this.end_date) {
            this.end_date = ''
        }

        if (!this.start_date) {
            this.start_date = ''
        }

        if (this.start_date && !this.end_date) {

            this.end_date = this.todayString
            this.end_date = this.pipe.transform(this.end_date, 'yyyy-MM-dd');
        }

        if (this.end_date && !this.start_date) {
            this.start_date = this.end_date

        }

        if (this.start_date > this.todayString) {

            this.openSnackBar('Please, Review your dates!', 'Start Date is bigger than Today')
            return this.router.navigate(['invoices'])
        }

        if (this.start_date > this.end_date) {
            this.openSnackBar('Please, Review your dates!', 'Start Date is bigger than End Date')
            return this.router.navigate(['invoices'])

        }

        this.router.navigate(['invoices/list'], {
            queryParams: {
                card_id: this.searchForm.value.card,
                is_income: this.searchForm.value.is_income,
                start_date: this.start_date,
                end_date: this.end_date,
                company_id: this.searchForm.value.company_id
            }
        });
    };


    public createFormGroup(): FormGroup {
        return new Invoice().toFormGroup();
    }

    public openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
            duration: 12000,
        });
    }



}
