import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-auto-complete',
    templateUrl: 'auto-complete.component.html',
    styleUrls: ['auto-complete.component.scss']
})
export class AutoCompleteComponent {

    @Input() text: string;
    @Input() icon: string;
    @Input() disabled: boolean;
    @Input() loading: boolean;

    @Output() clickEvent: EventEmitter<boolean> = new EventEmitter();

    constructor() {
    }

    public onClick(): void {
        this.clickEvent.emit(true);
    }
}
