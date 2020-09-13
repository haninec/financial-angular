
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { BaseModel } from './base.model';
import { Type } from './type.models';


export class Company extends BaseModel {

    public company: string;
    public type_id: number;
    public user_id: number;
    public type: Type = new Type();


    constructor(data?: any) {
        super(data);
        
        if (data) {
            this.company = data.company;
            this.type_id = data.type_id;
            this.user_id = data.user_id;
            this.type = new Type(data.type);
        }
    }

    public toFormGroup(): FormGroup {
        const form = super.toFormGroup();

        form.addControl('company', new FormControl(null, [
            Validators.required
        ]));
    
        form.addControl('type_id', new FormControl(null, [
            Validators.required
        ]));

        return form;
    }
}
