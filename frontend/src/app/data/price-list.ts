export interface MultiPriceListPayload {
  Items: PriceList[]
}

export interface PriceListPayload {
  Item: PriceList
}

export interface PriceList {

  title: String;
  listings: {assortment: string, catalogue: Catalogue[]}[]

}

export interface Catalogue {
  name: string;
  price: number;
}
