
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { BaseModel } from './base.model';
import { isNumberValidator } from '../validators/is-number.validator';

export class Holder extends BaseModel {

    public holder_name: string;
    public username: string;

    constructor(data?: any) {
        super(data);
        
        if (data) {
            this.holder_name = data.holder_name;
            this.username = data.username;
        }
    }

    public toFormGroup(): FormGroup {
        const form = super.toFormGroup();

        form.addControl('holder_name', new FormControl(null, [
            Validators.required,
            Validators.maxLength(100)
        ]));
        
        return form;
    }
}
