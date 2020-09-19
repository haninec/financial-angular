import { BaseFilter } from './base.filter';

export class InvoiceFilter extends BaseFilter {

    public invoice_date: Date;
    public company_id: number;
    public start_date: Date;
    public end_date: Date;
    public card_id: number
    public is_income: boolean;

    constructor(data?: any) {
        super(data);

        if (data) {
            this.invoice_date = data.invoice_date;
            this.company_id = data.company_id;
            this.start_date = data.start_date;
            this.end_date = data.end_date;
            this.is_income = data.is_income;
            this.card_id = data.card_id;    
        }
    }

    public toQueryString(): string {
        let qs = super.toQueryString();

        if (this.invoice_date) {
            qs += `&invoice_date=${this.invoice_date}`;
        }
        if (this.company_id) {
            qs += `&company_id=${this.company_id}`;
        }
        if (this.start_date) {
            qs += `&start_date=${this.start_date}`;
        }
        if (this.end_date) {
            qs += `&end_date=${this.end_date}`;
        }
        if (this.is_income) {
            qs += `&is_income=${this.is_income}`;
        }
        if (this.card_id) {
            qs += `&card_id=${this.card_id}`;
        }
        return qs;
    }
}

