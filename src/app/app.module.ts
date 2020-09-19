import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';
import { fuseConfig } from 'app/fuse-config';
import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { MaterialModule } from './material.module';
import { AlertService } from './shared/services/alert.service';
import { BroadcastService } from './shared/services/broadcast.service';
import { StorageService } from './shared/services/storage.service';
import { SharedModule } from './shared/shared.module';
import { AppRoutes } from './app.routes';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(AppRoutes),

        TranslateModule.forRoot(),

        NgxMaskModule.forRoot(),
        ToastrModule.forRoot({
            maxOpened: 1,
            autoDismiss: true
        }),

        // Material
        MaterialModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule,
        SharedModule
    ],
    providers: [
        AlertService,
        BroadcastService,
        StorageService,
        
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
