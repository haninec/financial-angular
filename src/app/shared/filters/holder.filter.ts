import { BaseFilter } from './base.filter';

export class HolderFilter extends BaseFilter {


    public holder_name: string
    
    
    constructor(data?: any) {
        super(data);

        if (data) {
            this.holder_name = data.holder_name;
        }
    }

    public toQueryString(): string {
        let qs = super.toQueryString();

        if (this.holder_name) {
            qs += `&holder_name=${this.holder_name}`;
        }

        return qs;
    }
}
