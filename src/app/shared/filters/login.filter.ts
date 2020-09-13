import { BaseFilter } from './base.filter';

export class LoginFilter extends BaseFilter {

    public name: string;
    
    constructor(data?: any) {
        super(data);

        if (data) {
            this.name = data.name;
        }
    }

    public toQueryString(): string {
        let qs = super.toQueryString();

        if (this.name) {
            qs += `&name=${this.name}`;
        }

        return qs;
    }
}
