import { BaseFilter } from './base.filter';

export class CardFilter extends BaseFilter {

    public card_number: number;
    public card_limit: number;
    public card_value: number;
    public card_start_value: number;
    public debitCreditId: number;
    public chequingId: number;
    public userId: number;

    constructor(data?: any) {
        super(data);

        if (data) {
            this.card_number = data.card_number;
            this.card_limit = data.card_limit;
            this.card_value = data.card_value;
            this.card_start_value = data.card_start_value;
            this.debitCreditId = data.debitCreditId;
            this.chequingId = data.chequingId;
            this.userId = data.userId;

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
        if (this.card_value) {
            qs += `&card_value=${this.card_value}`;
        }
        if (this.card_start_value) {
            qs += `&card_start_value=${this.card_start_value}`;
        }
        if (this.debitCreditId) {
            qs += `&debitCreditId=${this.debitCreditId}`;
        }
        if (this.chequingId) {
            qs += `&chequingId=${this.chequingId}`;
        }
        if (this.userId) {
            qs += `&userId=${this.userId}`;
        }

        return qs;
    }
}



