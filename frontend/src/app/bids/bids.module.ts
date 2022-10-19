import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BidsComponent } from './bids.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { NewBidComponent } from './new-bid/new-bid.component';
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    BidsComponent,
    AddressFormComponent,
    NewBidComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
  ]
})
export class BidsModule { }
