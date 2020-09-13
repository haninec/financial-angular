
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { BaseModel } from './base.model';

export class Login extends BaseModel {

    public username: string;
    public password: string;
    

    constructor(data?: any) {
        super(data);
        
        if (data) {
            this.username = data.username;
            this.password = data.password;
        }
    }

    public toFormGroup(): FormGroup {
        const form = super.toFormGroup();

        form.addControl('username', new FormControl(null, [
            Validators.required
        ]));

        form.addControl('password', new FormControl(null, [
            Validators.required
        ]));

        return form;
    }
}
