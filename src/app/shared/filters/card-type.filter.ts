import { BaseFilter } from './base.filter';

export class CardTypeFilter extends BaseFilter {

    public is_credit_card: string;
    
    constructor(data?: any) {
        super(data);

        if (data) {
            this.is_credit_card = data.is_credit_card;
        }
    }

    public toQueryString(): string {
        let qs = super.toQueryString();

        if (this.is_credit_card) {
            qs += `&is_credit_card=${this.is_credit_card}`;
        }

        return qs;
    }
}
