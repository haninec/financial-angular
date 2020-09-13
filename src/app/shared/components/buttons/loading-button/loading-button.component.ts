import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-loading-button',
    templateUrl: 'loading-button.component.html',
    styleUrls: ['loading-button.component.scss']
})
export class LoadingButtonComponent {

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
