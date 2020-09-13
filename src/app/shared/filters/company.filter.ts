import { BaseFilter } from './base.filter';

export class CompanyFilter extends BaseFilter {


    public company: string;
    public typeId: number;
    public userId: number;

    
    
    constructor(data?: any) {
        super(data);

        if (data) {
            this.company = data.company;
            this.typeId = data.typeId;
            this.userId = data.userId;
        }
    }

    public toQueryString(): string {
        let qs = super.toQueryString();

        if (this.company) {
            qs += `&company=${this.company}`;
        }

        if (this.typeId) {
            qs += `&typeId=${this.typeId}`;
        }

        if (this.userId) {
            qs += `&userId=${this.userId}`;
        }

        return qs;
    }
}
