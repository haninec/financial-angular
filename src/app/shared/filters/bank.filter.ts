import { BaseFilter } from './base.filter';

export class BankFilter extends BaseFilter {

    public bank_name: string;
    public bank_initials: string;
    public username: string;
    
    constructor(data?: any) {
        super(data);

        if (data) {
            this.bank_name = data.bank_name;
            this.bank_initials = data.bank_initials;
            this.username = data.username;
        }
    }

    public toQueryString(): string {
        let qs = super.toQueryString();

        if (this.bank_name) {
            qs += `&bank_name=${this.bank_name}`;
        }
        if (this.bank_initials) {
            qs += `&bank_initials=${this.bank_initials}`;
        }
        if (this.username) {
            qs += `&username=${this.username}`;
        }

        return qs;
    }
}
