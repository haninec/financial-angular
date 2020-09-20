import { BaseFilter } from './base.filter';

export class CompanyFilter extends BaseFilter {


    public company: string;
    public type_id: number;
   

    
    
    constructor(data?: any) {
        super(data);

        if (data) {
            this.company = data.company;
            this.type_id = data.type_id;
        }
    }

    public toQueryString(): string {
        let qs = super.toQueryString();

        if (this.company) {
            qs += `&company=${this.company}`;
        }

        if (this.type_id) {
            qs += `&type_id=${this.type_id}`;
        }

        return qs;
    }
}
