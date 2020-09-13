import { BaseFilter } from './base.filter';

export class ChequingFilter extends BaseFilter {


    public account_number: number;
    public bankId: number;
    public holderId: number;

    
    
    constructor(data?: any) {
        super(data);

        if (data) {
            this.account_number = data.account_number;
            this.bankId = data.bankId;
            this.holderId = data.holderId;
        }
    }

    public toQueryString(): string {
        let qs = super.toQueryString();

        if (this.account_number) {
            qs += `&account_number=${this.account_number}`;
        }

        if (this.bankId) {
            qs += `&bankId=${this.bankId}`;
        }

        if (this.holderId) {
            qs += `&holderId=${this.holderId}`;
        }

        return qs;
    }
}
