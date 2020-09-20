import { BaseFilter } from './base.filter';

export class CardFilter extends BaseFilter {

    public card_number: number;
    public card_limit: number;
    public balance: number;
    public card_initial_value: number;
    public is_credit_card: boolean;
    public chequing_id: number;

    constructor(data?: any) {
        super(data);

        if (data) {
            this.card_number = data.card_number;
            this.card_limit = data.card_limit;
            this.balance = data.balance;
            this.card_initial_value = data.card_initial_value;
            this.is_credit_card = data.is_credit_card;
            this.chequing_id = data.chequing_id;

        }
    }

    public toQueryString(): string {
        let qs = super.toQueryString();

        if (this.card_number) {
            qs += `&card_number=${this.card_number}`;
        }
        if (this.card_limit) {
            qs += `&card_limit=${this.card_limit}`;
        }
        if (this.balance) {
            qs += `&balance=${this.balance}`;
        }
        if (this.card_initial_value) {
            qs += `&card_initial_value=${this.card_initial_value}`;
        }

        if (this.is_credit_card == true || this.is_credit_card == false) {
            qs += `&is_credit_card=${this.is_credit_card}`;
        }
        if (this.chequing_id) {
            qs += `&chequing_id=${this.chequing_id}`;
        }

        return qs;
    }
}



