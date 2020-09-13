
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { BaseModel } from './base.model';

export class CardType extends BaseModel {

    public card_debit_credit: string;

    

    constructor(data?: any) {
        super(data);
        
        if (data) {
            this.card_debit_credit = data.card_debit_credit;
        }
    }

    public toFormGroup(): FormGroup {
        const form = super.toFormGroup();

        form.addControl('card_debit_credit', new FormControl(null, [
        ]));

        return form;
    }
}
