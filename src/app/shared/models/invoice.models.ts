
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { BaseModel } from './base.model';
import { isNumberValidator } from '../validators/is-number.validator';
import { Company } from './company.models';
import { Card } from './card.model';

export class Invoice extends BaseModel {

   
    public invoice_date: Date;
    public company_id: number;
    public company: Company = new Company();
    public invoice_value: number;
    public is_income: boolean;
    public card_id: number
    public card: Card = new Card();
    public username: number;
    public start_date: Date;
    public end_date: Date;


    constructor(data?: any) {
        super(data);
        
        if (data) {
            this.invoice_date = data.invoice_date;
            this.company_id = data.company_id;
            this.company = new Company(data.company);
            this.invoice_value = data.invoice_value;
            this.is_income = data.is_income;
            this.card_id = data.card_id;
            this.card = new Card(data.card);
            this.username = data.username;
        }
    }

    public toFormGroup(): FormGroup {
        const form = super.toFormGroup();


        form.addControl('invoice_date', new FormControl(null, [
            Validators.required
        ]));

        form.addControl('company_id', new FormControl(null, [
            Validators.required
        ]));

        form.addControl('invoice_value', new FormControl(null, [
            Validators.required,
            isNumberValidator
        ]));

        form.addControl('is_income', new FormControl(null, [
            Validators.required
        ]));

        form.addControl('card_id', new FormControl(null, [
            Validators.required
        ]));

        form.addControl('username', new FormControl(null, [
        ]));

        return form;
    }
}
