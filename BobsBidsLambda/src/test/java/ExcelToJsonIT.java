import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.junit.Ignore;
import org.junit.Test;
import pricelist.ExcelConverter;

import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;

@Ignore
public class ExcelToJsonIT {

    @Test
    public void excelToJsonTest() throws IOException, InvalidFormatException {
        final Path resourceDirectory = Paths.get("src", "test", "resources", "Material-4-18-22.xlsx");
        String listings = new ExcelConverter(new FileInputStream(resourceDirectory.toFile())).convert();
        System.out.println();
    }
}
