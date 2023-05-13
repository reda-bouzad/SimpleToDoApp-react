import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './view/basic/basic.component';
import { PieComponent } from './view/pie/pie.component';
import { DoungnutComponent } from './view/doungnut/doungnut.component';
import {ChartModule} from "primeng/chart";

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    PieComponent,
    DoungnutComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ChartModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
