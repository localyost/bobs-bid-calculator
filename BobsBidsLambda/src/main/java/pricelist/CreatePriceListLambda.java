package pricelist;


import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.document.DynamoDB;
import com.amazonaws.services.dynamodbv2.document.Item;
import com.amazonaws.services.dynamodbv2.document.Table;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.S3Event;
import com.amazonaws.services.lambda.runtime.events.models.s3.S3EventNotification;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.GetObjectRequest;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

public class CreatePriceListLambda implements RequestHandler<S3Event, Boolean> {

    @Override
    public Boolean handleRequest(S3Event event, Context context) {

        if (event.getRecords().stream().findFirst().isPresent()) {
           final S3Client client = S3Client.builder()
                    .region(Region.US_WEST_1)
                    .build();

            S3EventNotification.S3Entity entity = event.getRecords().stream().findFirst().get().getS3();
            final String bucketName = entity.getBucket().getName();
            final String keyName = entity.getObject().getKey();

            GetObjectRequest getObjectRequest = GetObjectRequest.builder()
                    .bucket(bucketName)
                    .key(keyName)
                    .build();

            InputStream contents = client.getObject(getObjectRequest);
            final String title = keyName.split("/")[1];
            try {
                persist(title, contents);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }

        }
        return false;
    }


    private void persist(String title, InputStream contents) throws IOException {

        AmazonDynamoDB client = AmazonDynamoDBClientBuilder
                .standard()
                .withRegion(Regions.US_WEST_1)
                .build();

        DynamoDB dynamoDB = new DynamoDB(client);

        Table table = dynamoDB.getTable("price_lists");
        String listingJson = new ExcelConverter(contents).convert();

        Item item = new Item()
                .withPrimaryKey("title", title)
                .withJSON("listings", listingJson);
        table.putItem(item);
    }

}
