import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {PriceList, PriceListPayload} from "../../data/price-list";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-price-list',
  templateUrl: './view-price-list.component.html',
  styleUrls: ['./view-price-list.component.scss']
})
export class ViewPriceListComponent implements OnInit {

  private url: string | undefined;
  public priceList: PriceList | undefined;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.url = environment.apiURL+"/price_lists/"+params['title'];
    })
  }

  public displayedColumns: string[] = ['name', 'price'];

  ngOnInit(): void {
    if (this.url) {
      this.http.get<PriceListPayload>(this.url).subscribe(value => {
        this.priceList = value.Item;
      })
    }
  }

}
