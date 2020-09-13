import { BaseModel } from './base.model';
import { TemplateRef } from '@angular/core';

export class TableColumn {
    
    public label: string;
    public translate: string;
    public size: string;
    public definition: string;
    public displayOrder: number;
    public displayFn: (baseModel: BaseModel) => any;
    public displayTmpl: TemplateRef<any>;
    
    constructor(options: any) {
        this.label = options.label ? options.label : '';
        this.translate = options.translate ? options.translate : '';
        this.size = options.size ? options.size : '';
        this.definition = options.definition ? options.definition : '';
        this.displayOrder = options.displayOrder ? options.displayOrder : '1';
        this.displayFn = options.displayFn ? options.displayFn : () => { }; 
        this.displayTmpl = options.displayTmpl;
    }
}
