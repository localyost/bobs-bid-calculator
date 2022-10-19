import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PriceList, MultiPriceListPayload} from "../data/price-list";
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {

  constructor(private http: HttpClient) { }
  public priceLists: PriceList[] = [];

  private url = environment.apiURL+"/price_lists";

  ngOnInit(): void {
    this.http.get<MultiPriceListPayload>(this.url).subscribe(value => {
      this.priceLists = value.Items.map(priceList => priceList);
    })
  }

}
