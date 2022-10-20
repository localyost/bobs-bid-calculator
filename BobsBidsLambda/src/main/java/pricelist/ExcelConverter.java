package pricelist;

import com.google.gson.Gson;
import lombok.RequiredArgsConstructor;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
public class ExcelConverter {

    private final InputStream excelStream;
    private final List<Listing> listings = new ArrayList<>();

    public String convert() throws IOException {
        try(Workbook workbook = new XSSFWorkbook(excelStream)) {
            for (int i = 0; i < workbook.getNumberOfSheets(); i++) {
                Sheet sheet = workbook.getSheetAt(i);
                final Listing listing = new Listing();
                listing.setAssortment(sheet.getSheetName());

                for (Row currentRow : sheet) {
                    if (currentRow.getRowNum() > 0) {
                        Cell titleCell = currentRow.getCell(0);
                        Cell priceCell = currentRow.getCell(1);
                        if (titleCell != null && priceCell != null) {
                            listing.addCatalogueItem(titleCell.getStringCellValue(), priceCell.getNumericCellValue());
                        }
                    }
                }

                this.listings.add(listing);
            }
        }
        return new Gson().toJson(listings);
    }

}
