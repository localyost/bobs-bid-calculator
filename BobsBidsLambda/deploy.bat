call mvn clean package
timeout /t 1
call aws s3 cp .\target\BobsBidsLambda-1.0-SNAPSHOT.jar s3://bobs-bid-code
timeout /t 1
call aws lambda update-function-code --function-name createPriceList --s3-bucket bobs-bid-code --s3-key BobsBidsLambda-1.0-SNAPSHOT.jar --region us-west-1
timeout /t 5
call upload.bat
