import { BaseFilter } from './base.filter';

export class InOutFilter extends BaseFilter {


    public debit_credit: string

    
    
    constructor(data?: any) {
        super(data);

        if (data) {
            this.debit_credit = data.debit_credit;

        }
    }

    public toQueryString(): string {
        let qs = super.toQueryString();

        if (this.debit_credit) {
            qs += `&debit_credit=${this.debit_credit}`;
        }

        return qs;
    }
}
