#!/bin/bash

cat > $PROP_FILE <<EOF
#Database Name - default is test
database=${SPRING_DATA_MONGODB_DATABASE:-dashboarddb}

#Database HostName - default is localhost
dbhost=${MONGO_HOST:-10.0.1.1}


#Database Port - default is 27017
dbport=${MONGO_PORT:-27017}

#Database Username - default is blank
dbusername=
#${HYGIEIA_API_ENV_SPRING_DATA_MONGODB_USERNAME:-dashboarduser}

#Database Password - default is blank
dbpassword=
#${HYGIEIA_API_ENV_SPRING_DATA_MONGODB_PASSWORD:-dbpassword}

#Logging File
logging.file=${APPDYNAMICS_LOGFILE:-./logs/appd-collector.log}

#Collector schedule (required)
appdynamics.cron=1 * * * * *

#Appdynamics server (required)
appdynamics.instanceUrls=http://104.45.145.222:8090

#Appdynamics Username (required)
appdynamics.username=admin@customer1
 # (if multi-tenancy APPD_USERNAME@TENANT)

#Appdynamics Password (required)
appdynamics.password=root

#Appdynamics Dashboard (required)
appdynamics.dashboardUrl=http://104.45.145.222:8090/controller/#/location=APPS_ALL_DASHBOARD&timeRange=last_1_day.BEFORE_NOW.-1.-1.1440&dashboardMode=force

EOF
