import { BaseFilter } from './base.filter';

export class InvoiceFilter extends BaseFilter {

    public invoice_date: Date;
    public companyId: number;
    public priceId: number;
    public debitCreditId: number;
    public cardId: number
    public userId: number;

    constructor(data?: any) {
        super(data);

        if (data) {
            this.invoice_date = data.invoice_date;
            this.companyId = data.companyId;
            this.priceId = data.priceId;
            this.debitCreditId = data.debitCreditId;
            this.cardId = data.cardId;
            this.userId = data.userId;

        }
    }

    public toQueryString(): string {
        let qs = super.toQueryString();

        if (this.invoice_date) {
            qs += `&invoice_date=${this.invoice_date}`;
        }
        if (this.companyId) {
            qs += `&companyId=${this.companyId}`;
        }
        if (this.priceId) {
            qs += `&priceId=${this.priceId}`;
        }
        if (this.debitCreditId) {
            qs += `&debitCreditId=${this.debitCreditId}`;
        }
        if (this.cardId) {
            qs += `&cardId=${this.cardId}`;
        }
        if (this.userId) {
            qs += `&userId=${this.userId}`;

            return qs;
        }
    }
}

