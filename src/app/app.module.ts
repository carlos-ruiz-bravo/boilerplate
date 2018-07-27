import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavbarComponent } from './navigation/topnavbar.component';
import { DetectionsHomeComponent } from './detections/detections-home.component';
import { MenubarModule } from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import { DetectionsListComponent } from './detections/detections-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavbarComponent,
    DetectionsHomeComponent,
    DetectionsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MenubarModule,
    TableModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
