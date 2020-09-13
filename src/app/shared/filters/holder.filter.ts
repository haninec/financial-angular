import { BaseFilter } from './base.filter';

export class HolderFilter extends BaseFilter {


    public holder_first_name: string
    public holder_last_name: string
    public holder_phone: number
    public holder_email: string
    
    
    constructor(data?: any) {
        super(data);

        if (data) {
            this.holder_first_name = data.holder_first_name;
            this.holder_last_name = data.holder_last_name;
            this.holder_phone = data.holder_phone;
            this.holder_email = data.holder_email;
        }
    }

    public toQueryString(): string {
        let qs = super.toQueryString();

        if (this.holder_first_name) {
            qs += `&holder_first_name=${this.holder_first_name}`;
        }

        if (this.holder_last_name) {
            qs += `&holder_last_name=${this.holder_last_name}`;
        }

        if (this.holder_phone) {
            qs += `&holder_phone=${this.holder_phone}`;
        }

        if (this.holder_email) {
            qs += `&holder_email=${this.holder_email}`;
        }

        return qs;
    }
}
