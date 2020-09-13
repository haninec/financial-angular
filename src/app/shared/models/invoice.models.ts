
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { BaseModel } from './base.model';
import { isNumberValidator } from '../validators/is-number.validator';
import { Company } from './company.models';

export class Invoice extends BaseModel {

   
    public invoice_date: Date;
    public companyId: number;
    public companies: Company = new Company();
    public invoicePrice: number;
    public debitCreditId: number;
    public cardId: number
    public userId: number;

    

    constructor(data?: any) {
        super(data);
        
        if (data) {
            this.invoice_date = data.invoice_date;
            this.companyId = data.companyId;
            this.companies = new Company(data.Company);
            this.invoicePrice = data.invoicePrice;
            this.debitCreditId = data.debitCreditId;
            this.cardId = data.cardId;
            this.userId = data.userId;
        }
    }

    public toFormGroup(): FormGroup {
        const form = super.toFormGroup();


        form.addControl('invoice_date', new FormControl(null, [
            Validators.required
        ]));

        form.addControl('companyId', new FormControl(null, [
            Validators.required
        ]));

        form.addControl('invoicePrice', new FormControl(null, [
            Validators.required,
            isNumberValidator
        ]));

        form.addControl('debitCreditId', new FormControl(null, [
            Validators.required
        ]));

        form.addControl('cardId', new FormControl(null, [
            Validators.required
        ]));

        form.addControl('userId', new FormControl(null, [
        ]));

        return form;
    }
}
