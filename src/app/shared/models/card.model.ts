import { FormGroup, Validators, FormControl } from '@angular/forms';
import { BaseModel } from './base.model';
import { isNumberValidator } from '../validators/is-number.validator';
import { Chequing } from './chequing.models';


export class Card extends BaseModel {

    public card_number: number;
    public card_limit: number;
    public card_initial_value: number;
    public balance: number;
    public chequing_id: number;
    public is_credit_card: boolean;
    public chequing: Chequing = new Chequing();
    public username: number;


    constructor(data?: any) {
        super(data);
        
        if (data) {
            this.card_number = data.card_number;
            this.card_limit = data.card_limit;
            this.card_initial_value = data.card_initial_value;
            this.balance = data.balance;
            this.chequing_id = data.chequing_id;
            this.chequing = new Chequing(data.chequing);
            this.is_credit_card = data.is_credit_card;
            this.username = data.username;
        }
    }

    public toFormGroup(): FormGroup {
        const form = super.toFormGroup();

        form.addControl('card_number', new FormControl(null, [
            Validators.required,
            isNumberValidator
        ]));
    
        form.addControl('card_limit', new FormControl(null, [
            Validators.required,
            isNumberValidator,
            Validators.maxLength(12)
        ]));

        form.addControl('card_initial_value', new FormControl(null, [
            Validators.required,
            isNumberValidator,
            Validators.maxLength(12)
        ]));   
        
        form.addControl('balance', new FormControl(null, [
            isNumberValidator,
            Validators.maxLength(12)
        ])); 

        form.addControl('chequing_id', new FormControl(null, [
            Validators.required
        ]));

        
        form.addControl('is_credit_card', new FormControl(null, [
            Validators.required
        ])); 

        return form;
    }
}
