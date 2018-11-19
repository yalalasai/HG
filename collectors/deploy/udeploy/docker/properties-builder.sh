#!/bin/bash


cat > $PROP_FILE <<EOF
#Database Name
dbname=${HYGIEIA_API_ENV_SPRING_DATA_MONGODB_DATABASE:-dashboarddb}

#Database HostName - default is localhost
dbhost=${MONGO_HOST}

#Database Port - default is 27017
dbport=${MONGO_PORT:-27017}


#Database Username - default is blank
dbusername=

#Database Password - default is blank
dbpassword=

#Collector schedule (required)
udeploy.cron=0 0/1 * * * *

#UDeploy server (required) - Can provide multiple
udeploy.servers[0]=http://40.121.66.132:8095
udeploy.niceNames[0]=

#UDeploy user name (required)
udeploy.username=admin

#UDeploy password (required)
udeploy.password=admin@123

# UDeploy token can be used instead of username and password
udeploy.token=

EOF

echo "

===========================================
Properties file created `date`:  $PROP_FILE
Note: passwords hidden
===========================================
`cat $PROP_FILE |egrep -vi password`
 "

exit 0
