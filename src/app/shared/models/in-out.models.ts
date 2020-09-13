
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { BaseModel } from './base.model';

export class InOut extends BaseModel {

    public debit_credit: string;

    

    constructor(data?: any) {
        super(data);
        
        if (data) {
            this.debit_credit = data.debit_credit;

        }
    }

    public toFormGroup(): FormGroup {
        const form = super.toFormGroup();

        form.addControl('debit_credit', new FormControl(null, [
            Validators.required,

        ]));

        return form;
    }
}
