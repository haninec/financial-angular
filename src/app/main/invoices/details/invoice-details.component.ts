import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { BaseDetailsComponent } from 'app/shared/components/base/base-details.component';
import { Invoice } from 'app/shared/models/invoice.models';
import { InvoiceService } from 'app/shared/services/invoice.service';
import { InOutService } from 'app/shared/services/inOut.service';
import { InOutFilter } from 'app/shared/filters/in-out.filter';
import { InOut } from 'app/shared/models/in-out.models';
import { BaseResponse } from 'app/shared/models/base-response.model';
import { CardService } from 'app/shared/services/card.service';
import { Card } from 'app/shared/models/card.model';
import { CardFilter } from 'app/shared/filters/card.filter';
import { Company } from 'app/shared/models/company.models';
import { CompanyService } from 'app/shared/services/company.service';
import { CompanyFilter } from 'app/shared/filters/company.filter';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';



@Component({
    selector: 'app-invoice-details',
    templateUrl: './invoice-details.component.html',
    styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent extends BaseDetailsComponent<Invoice> implements OnInit, OnDestroy {
    public inOuts: InOut[] = [];
    public cards: Card[] = [];
    public companies: Company[] = [];
    // FOR AUTO COMPLETE -------------------------------------------------------------------------------------------------------------------

    myControl = new FormControl();
    options: any[] = [
        { name: 'Mary' },
        { name: 'Shelley' },
        { name: 'Igor' }
    ];
    filteredOptions: Observable<any[]>;

    // END AUTO COMPLETE -------------------------------------------------------------------------------------------------------------------




    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public apiService: InvoiceService,
        public inOutService: InOutService,
        public cardService: CardService,
        public companyService: CompanyService,
        public dialog: MatDialog,
        @Inject(MAT_DIALOG_DATA) public data?: Invoice) {
        super(router, activatedRoute, apiService, dialog);

        this.baseUrl = 'invoices';
    }

    public ngOnInit(): void {
        super.ngOnInit();
        this.load();
        this.loadInOut();
        this.loadCards();
        this.loadCompanies();
        this.companyAutoComplete();



    }

    public setIdControl(company: Company): void{
        this.form.controls['companyId'].setValue(company.id)
    }
 // FOR AUTO COMPLETE -------------------------------------------------------------------------------------------------------------------
           
    public companyAutoComplete() {

            this.filteredOptions = this.form.controls['companyId'].valueChanges
            .pipe(
                startWith(''),
                // map(value => typeof value === 'string' ? value : value.company),
                map(name => name ? this._filter(name) : this.companies.slice())
            );
        }
        // END AUTO COMPLETE -------------------------------------------------------------------------------------------------------------------



    // FOR AUTO COMPLETE -------------------------------------------------------------------------------------------------------------------
    public valueOption(option?) {
        this.form.controls['companyId'].setValue(option.id)
        return option.id
    }
    
    public displayFn(company: Company) {
        console.log(this)
        if (company == null){
            return
        }
        var companyFn = company ? company.company : '';
        var typeFn = company ? company.type.type : '';
        return companyFn + ' -- ' + typeFn;
    }

    private _filter(value: Company): any[] {
        const filterValue = value.company.toLowerCase();

        return this.companies.filter(option => option.company.toLowerCase().indexOf(filterValue) === 0);
    }

    // END AUTO COMPLETE -------------------------------------------------------------------------------------------------------------------


    // LOAD INCOME OUTCOME
    public loadInOut(): void {
        const filter = new InOutFilter({
            pagination: {
                sortBy: 'name',
                sortDirection: 'asc'
            }
        });

        this.inOutService
            .get(filter.toQueryString())
            .subscribe((response: BaseResponse<InOut[]>) => {
                this.inOuts = response.results;
            });

    }
    // END LOAD INCOME OUTCOME

    // LOAD CARDS
    public loadCards(): void {
        const filter = new CardFilter({
            pagination: {
                sortBy: 'name',
                sortDirection: 'asc'
            }
        });

        this.cardService
            .get(filter.toQueryString())
            .subscribe((response: BaseResponse<Card[]>) => {
                this.cards = response.results;
            });

    }
    // END LOAD CARDS

    // LOAD COMPANIES
    public loadCompanies(): void {
        const filter = new CompanyFilter({
            pagination: {
                sortBy: 'name',
                sortDirection: 'asc'
            }
        });
        this.companyService
            .get(filter.toQueryString())
            .subscribe((response: BaseResponse<Company[]>) => {
                this.companies = response.results;
                this.companyAutoComplete();
            });
    }
    // END LOAD COMPANIES


    public createFormGroup(): FormGroup {
        return new Invoice().toFormGroup();
    }

    public saveChanges(): void {
        this.model = this.form.value;
        this.isLoading = true;
        this.apiService
            .saveById(this.model)
            .subscribe((response: BaseResponse<Invoice>) => {
                this.isLoading = false;
                this.dialog.closeAll();
            }, () => {
                this.isLoading = false;
            });
    }
    public closeDialog(): void {
        this.dialog.closeAll();
    }

    public load(): void {
        if (this.data.id != undefined) {
            this.apiService
                .getById(this.data.id)
                .subscribe((item: BaseResponse<any>) => {
                    item['invoice_date'] = item['invoice_date'].split("/")
                    item['invoice_date'] = new Date(
                        +item['invoice_date'][2],
                        item['invoice_date'][1] - 1,
                        +item['invoice_date'][0]
                    )
                    this.model = this.apiService.map(item);
                    this.form.patchValue(this.model);
                    this.isLoading = false

                }, (err) => {
                }, () => {
                    this.afterLoad();
                });
        } else {
            this.afterLoad();
        }
    }
}
