import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceListComponent } from './price-list.component';
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import { ViewPriceListComponent } from './view-price-list/view-price-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatExpansionModule} from "@angular/material/expansion";



@NgModule({
  declarations: [
    PriceListComponent,
    ViewPriceListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatExpansionModule
  ]
})
export class PriceListModule { }
