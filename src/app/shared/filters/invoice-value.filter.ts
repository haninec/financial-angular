import { BaseFilter } from './base.filter';

export class InvoiceValueFilter extends BaseFilter {


    public incomeInvoiceQueryAM: number;
    public incomeInvoiceQueryLM: number;
    public outcomeInvoiceQueryAM: number;
    public outcomeInvoiceQueryLM: number;

    
    
    constructor(data?: any) {
        super(data);

        if (data) {
            this.incomeInvoiceQueryAM = data.incomeInvoiceQueryAM;
            this.incomeInvoiceQueryLM = data.incomeInvoiceQueryLM;
            this.outcomeInvoiceQueryAM = data.outcomeInvoiceQueryAM;
            this.outcomeInvoiceQueryLM = data.outcomeInvoiceQueryLM;

        }
    }

    public toQueryString(): string {
        let qs = super.toQueryString();

        if (this.incomeInvoiceQueryAM) {
            qs += `&incomeInvoiceQueryAM=${this.incomeInvoiceQueryAM}`;
        }
        if (this.incomeInvoiceQueryLM) {
            qs += `&incomeInvoiceQueryLM=${this.incomeInvoiceQueryLM}`;
        }
        if (this.outcomeInvoiceQueryAM) {
            qs += `&outcomeInvoiceQueryAM=${this.outcomeInvoiceQueryAM}`;
        }
        if (this.outcomeInvoiceQueryLM) {
            qs += `&outcomeInvoiceQueryLM=${this.outcomeInvoiceQueryLM}`;
        }

        return qs;
    }
}
    
    
    
