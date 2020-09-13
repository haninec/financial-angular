
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { BaseModel } from './base.model';

export class InvoiceValue extends BaseModel {

    public incomeInvoiceQueryAM: number;
    public incomeInvoiceQueryLM: number;
    public outcomeInvoiceQueryAM: number;
    public outcomeInvoiceQueryLM: number;
    

    constructor(data?: any) {
        super(data);
        
        if (data) {
            this.incomeInvoiceQueryAM = data.incomeInvoiceQueryAM;
            this.incomeInvoiceQueryLM = data.incomeInvoiceQueryLM;
            this.outcomeInvoiceQueryAM = data.outcomeInvoiceQueryAM;
            this.outcomeInvoiceQueryLM = data.outcomeInvoiceQueryLM;
        }
    }

    public toFormGroup(): FormGroup {
        const form = super.toFormGroup();

        form.addControl('incomeInvoiceQueryAM', new FormControl(null, [
        ]));

        form.addControl('incomeInvoiceQueryLM', new FormControl(null, [
        ]));

        form.addControl('outcomeInvoiceQueryAM', new FormControl(null, [
        ]));

        form.addControl('outcomeInvoiceQueryLM', new FormControl(null, [
        ]));

        return form;
    }
}
