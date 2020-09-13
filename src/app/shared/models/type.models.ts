
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { BaseModel } from './base.model';

export class Type extends BaseModel {

    public type: string;

    constructor(data?: any) {
        super(data);
        
        if (data) {
            this.type = data.type;

        }
    }

    public toFormGroup(): FormGroup {
        const form = super.toFormGroup();

        form.addControl('type', new FormControl(null, [
            Validators.required,
            Validators.maxLength(30)
        ]));

        return form;
    }
}
