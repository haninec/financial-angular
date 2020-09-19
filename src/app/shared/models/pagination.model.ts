export class Pagination {
    public page: number;
    public ordering: string;

    public pageSize: number;
    public totalResults: number;
    public totalPages: number;
    public pageSizeOptions: number[] = [5, 10, 25, 50, 100, 1000];
    public sortDirection: string;

    constructor(options?: any) {
        this.pageSize = (options && options.pageSize) ? options.pageSize : 25;
        this.totalResults = (options && options.totalResults) ? options.totalResults : 0;
        this.totalPages = (options && options.totalPages) ? options.totalPages : 0;
        this.sortDirection = (options && options.sortDirection) ? options.sortDirection : 'asc';

        // Modified for Django
        this.ordering = (options && options.ordering) ? options.ordering : 'id';
        this.page = (options && options.page) ? options.page : 1;
    }
}
