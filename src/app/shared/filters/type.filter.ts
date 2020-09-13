import { BaseFilter } from './base.filter';

export class TypeFilter extends BaseFilter {

    public type: string;
    
    constructor(data?: any) {
        super(data);

        if (data) {
            this.type = data.type;
        }
    }

    public toQueryString(): string {
        let qs = super.toQueryString();

        if (this.type) {
            qs += `&type=${this.type}`;
        }

        return qs;
    }
}
