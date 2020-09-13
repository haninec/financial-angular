
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { BaseModel } from './base.model';

export class Bank extends BaseModel {

    public bank_name: string;
    public bank_initials: string;
    public username_create: string;
    

    constructor(data?: any) {
        super(data);
        
        if (data) {
            this.bank_name = data.bank_name;
            this.bank_initials = data.bank_initials;
            this.username_create = data.username_create;
        }
    }

    public toFormGroup(): FormGroup {
        const form = super.toFormGroup();

        form.addControl('bank_initials', new FormControl(null, [
            Validators.required,
            Validators.maxLength(20)
        ]));

        form.addControl('bank_name', new FormControl(null, [
            Validators.required,
            Validators.maxLength(100)
        ]));

        form.addControl('active_status', new FormControl(null, [
        ]));

        return form;
    }
}
