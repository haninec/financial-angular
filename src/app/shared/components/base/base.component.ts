import { OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

export abstract class BaseComponent implements OnInit, OnDestroy {

    protected baseUrl: string;

    protected queryString = '';
    public isLoading = false;

    protected subscriptions: Subscription = new Subscription();
    protected channel: any;

    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public dialog?: MatDialog) {
    }

    public ngOnInit(): void  {

    }

    public ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
    
    public load(): void {
        this.isLoading = true;
    }

    public afterLoad(): void {
        this.isLoading = false;
    }

    public openDialog(target: any, options?: any, data?: any): MatDialogRef<unknown, any> {
        if (!options) {
            options = { width: 'auto' };
        }

        if (data) {
            options.data = data;
        }
        
        return this.dialog.open(target, options);
    }

    public copy(source: any): any {
        return JSON.parse(JSON.stringify(source));
    }

    public simpleComparer(o1: any, o2: any): boolean {
        return o1 == o2;
    }

    public redirect(url: string, target?: string): void {
        if (!url || url.length === 0) {
            return;
        }

        if (!url.startsWith('http')) {
            url = 'https://' + url;
        }

        window.open(url, target ? target : '_blank');
    }

    protected addQueryString(param: string, value: any): void  {
        if (this.queryString.length > 0) {
            this.queryString += '&';
        }

        this.queryString += `${param}=${value.toString()}`;
    }

    public log(message: string): void  {
        // Customize sua mensagem de log, inserindo data, horario, etc.
        console.log('---------------------');
        console.log(message);
        console.log('---------------------');
    }

    public error(message: string): void  {
        // Customize sua mensagem de erro, inserindo data, horario, etc.
        console.error('---------------------');
        console.error(message);
        console.error('---------------------');
    }
}
