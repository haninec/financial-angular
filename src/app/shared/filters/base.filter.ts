import { Pagination } from '../models/pagination.model';

export abstract class BaseFilter {

    public id: number = null;
    public status: boolean = null;

    public hasPagination: boolean = null;
    public pagination: Pagination = null;

    constructor(data?: any) {
        if (data) {
            this.id = data.id;
            this.status = data.status;
            this.hasPagination = data.hasPagination;
            this.pagination = new Pagination(data.pagination);
        }
    }

    public toQueryString(): string {
        let qs = '';
        if (this.id) {
            qs += `&id=${this.id}`;
        }
        if (this.status) {
            qs += `&status=${this.status}`;
        }

        if (this.hasPagination != null) {
            qs += `&hasPagination=${this.hasPagination}`;
        }

        if (this.pagination) {
            if (this.pagination.pageSize) {
                qs += `&pageSize=${this.pagination.pageSize}`;
            }

            if (this.pagination.page) {
                qs += `&page=${this.pagination.page}`;
            }

            // Ordering fixed
            if (this.pagination.ordering) {
                qs += `&ordering=${this.pagination.ordering}`;
            }

        }

        return qs;
    }
}
