import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavbarComponent } from './navigation/topnavbar.component';
import { DetectionsHomeComponent } from './detections/detections-home.component';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { DetectionsListComponent } from './detections/detections-list.component';
import { ButtonModule } from 'primeng/button';
import { DisplayDialogComponent } from './shared/display-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetectionsForm } from './detections/detections-form.component';
import {GrowlModule} from 'primeng/growl';
import {FileUploadModule} from 'primeng/fileupload';
import {TabViewModule} from 'primeng/tabview';
import {PanelModule} from 'primeng/panel';
import {SplitButtonModule} from 'primeng/splitbutton';
import {InputTextModule} from 'primeng/inputtext';

import {FieldsetModule} from 'primeng/fieldset';
@NgModule({
  declarations: [
    AppComponent,
    TopnavbarComponent,
    DetectionsHomeComponent,
    DetectionsListComponent,
    DisplayDialogComponent,
    DetectionsForm
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MenubarModule,
    TableModule,
    DialogModule,
    ButtonModule,
    GrowlModule,
    FileUploadModule,
    TabViewModule,
    FieldsetModule,
    PanelModule,
    SplitButtonModule,
    InputTextModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
