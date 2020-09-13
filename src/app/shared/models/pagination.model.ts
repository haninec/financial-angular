export class Pagination {
    public pageSize: number;
    public pageNumber: number;
    public totalResults: number;
    public totalPages: number;
    public pageSizeOptions: number[] = [5, 10, 25, 50, 100, 1000];

    public ordering: string;
    public sortDirection: string;

    constructor(options?: any) {
        this.pageSize = (options && options.pageSize) ? options.pageSize : 25;
        this.pageNumber = (options && options.pageNumber) ? options.pageNumber : 1;
        this.totalResults = (options && options.totalResults) ? options.totalResults : 0;
        this.totalPages = (options && options.totalPages) ? options.totalPages : 0;
        this.ordering = (options && options.ordering) ? options.ordering : 'id';
        this.sortDirection = (options && options.sortDirection) ? options.sortDirection : 'asc';
    }
}
