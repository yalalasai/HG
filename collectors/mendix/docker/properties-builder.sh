cat > $PROP_FILE <<EOF
#Database Name
dbname=${HYGIEIA_API_ENV_SPRING_DATA_MONGODB_DATABASE:-dashboarddb}
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
#Collector schedule (required)
# mendix app url (required) 
mendix.appname=
# mendix app username
mendix.username=
# mendix app apikeys
mendix.apikey=
EOF
echo "
===========================================
Properties file created `date`:  $PROP_FILE
Note: passwords hidden
===========================================
`cat $PROP_FILE |egrep -vi password`
 "
exit 0
