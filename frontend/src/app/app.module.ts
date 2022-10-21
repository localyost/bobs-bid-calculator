import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ComponentsModule} from "./components/components.module";
import {BidsModule} from "./bids/bids.module";
import {PriceListModule} from "./price-list/price-list.module";
import {AmplifyAuthenticatorModule} from "@aws-amplify/ui-angular";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BidsModule,
    PriceListModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    AmplifyAuthenticatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
