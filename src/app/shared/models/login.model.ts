
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { BaseModel } from './base.model';

export class Login extends BaseModel {

    public username: string;
    public password: string;
    public user_id: number;
    

    constructor(data?: any) {
        super(data);
        
        if (data) {
            this.username = data.username;
            this.password = data.password;
            this.user_id = data.user_id;
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
