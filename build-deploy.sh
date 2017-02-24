sh build.sh
cd dist
zip -r -D qip.zip *
curl -X POST -u rajabumkomwa:DHIS2016 -F file=@qip.zip http://41.217.202.50:9002/api/apps
