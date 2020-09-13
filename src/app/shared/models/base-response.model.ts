export class BaseResponse<T> {

    public page: any;
    public results: T;
    public success: boolean;
    public message: string;
    public errors: any[] = [];

    constructor(response?: any) {
        if (response) {
            this.page = response.page;
            this.results = response.results;
            this.success = response.success;
            this.message = response.message;
            this.errors = response.errors;
        }
    }
}
