#!/usr/bin/env bash
ng build --prod
mv dist/assets/manifest.webapp dist/
sudo rm -r /opt/dhis/config/apps/qip/
sudo mkdir /opt/dhis/config/apps/qip
sudo chmod 777 -R /opt/dhis/config/apps/qip/
cp -r dist/* /opt/dhis/config/apps/qip/
