
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { BaseModel } from './base.model';
import { isNumberValidator } from '../validators/is-number.validator';
import { Holder } from './holder.model';
import { Bank } from './bank.models';



export class Chequing extends BaseModel {

    public account_number: number;
    public bank_id: number;
    public bank: Bank = new Bank();
    public holder_id: number;
    public holder: Holder = new Holder();


    constructor(data?: any) {
        super(data);
        
        if (data) {
            this.account_number = data.account_number;
            this.bank_id = data.bank_id;
            this.holder_id = data.holder_id;
            this.holder = new Holder(data.holder);
            this.bank = new Bank(data.bank);
        }
    }

    public toFormGroup(): FormGroup {
        const form = super.toFormGroup();

        form.addControl('account_number', new FormControl(null, [
            Validators.required,
            isNumberValidator
        ]));
    
        form.addControl('bank_id', new FormControl(null, [
            Validators.required
        ]));

        form.addControl('holder_id', new FormControl(null, [
            Validators.required
        ]));        

        return form;
    }
}
