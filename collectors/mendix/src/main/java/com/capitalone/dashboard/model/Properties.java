package com.capitalone.dashboard.model;

import javax.validation.Valid;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.validation.annotation.Validated;

@ConfigurationProperties(prefix="mendix")
@Validated
public class Properties {

  private String dbname;
  private String dbhost;
  private String dbport;
  private String appname;
  private String username;
  private String apikey;
  
  @Valid
public String getDbname() {
	return dbname;
}
public void setDbname(String dbname) {
	this.dbname = dbname;
}
public String getDbhost() {
	return dbhost;
}
public void setDbhost(String dbhost) {
	this.dbhost = dbhost;
}
public String getDbport() {
	return dbport;
}
public void setDbport(String dbport) {
	this.dbport = dbport;
}
public String getAppname() {
	return appname;
}
public void setAppname(String appname) {
	this.appname = appname;
}
public String getUsername() {
	return username;
}
public void setUsername(String username) {
	this.username = username;
}
public String getApikey() {
	return apikey;
}
public void setApikey(String apikey) {
	this.apikey = apikey;
}
}

  
  