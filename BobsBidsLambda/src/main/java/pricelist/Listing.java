package pricelist;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
public class Listing {

    @Setter
    private String assortment;
    final private List<CatalogueItem> catalogue = new ArrayList<>();

    public void addCatalogueItem(String name, double price) {
        catalogue.add(new CatalogueItem(name, price));
    }

}