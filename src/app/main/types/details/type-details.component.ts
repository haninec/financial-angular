import { Component, OnInit, OnDestroy } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BaseDetailsComponent } from 'app/shared/components/base/base-details.component';
import { Type } from 'app/shared/models/type.models';
import { TypeService } from 'app/shared/services/type.service';
import { TypeFilter } from 'app/shared/filters/type.filter';


@Component({
    selector: 'app-type-details',
    templateUrl: './type-details.component.html',
    styleUrls: ['./type-details.component.scss']
})
export class TypeDetailsComponent extends BaseDetailsComponent<Type> implements OnInit, OnDestroy {

    public types: Type[] = [];
   
    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public apiService: TypeService,
        public dialog: MatDialog,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService) {
        super(router, activatedRoute, apiService, dialog);

        this.baseUrl = 'types';

        
    }



    public ngOnInit(): void {
        super.ngOnInit();

        this.loadType();
        
    }


    // GET CARD TYPE
    public loadType(): void {
        const filter = new TypeFilter({
            pagination: {
              ordering: 'type',
            }
          });
          
        this.apiService
            .get(filter.toQueryString())
            .subscribe((response: any) => {
                this.types = response.data;

            });
    }


    public createFormGroup(): FormGroup {
        return new Type().toFormGroup();
    }
    
}
