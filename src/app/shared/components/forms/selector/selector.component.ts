import {Component, Input, EventEmitter, Output} from '@angular/core';
import { BaseModel } from 'app/shared/models/base.model';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

/**
 * @title Select in a form
 */
@Component({
  selector: 'app-selector',
  templateUrl: 'selector.component.html',
  styleUrls: ['selector.component.scss'],
})
export class SelectorComponent {
  @Input() label: string
  @Input() items: BaseModel[];
  @Input() displayFn: (BaseModel: BaseModel) => any
  @Input() formControl = new FormControl




}

