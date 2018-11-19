package com.capitalone.dashboard.collector;

import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import com.capitalone.dashboard.model.Properties;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.Mongo;
import com.mongodb.util.JSON;
import java.io.BufferedReader;
import java.io.InputStreamReader;

/**
 * HudsonClient implementation that uses RestTemplate and JSONSimple to fetch
 * information from Hudson instance.
 */
@SuppressWarnings("deprecation")
@Component
@EnableScheduling
public class DefaultMendixClient {
	
	
	@Autowired
	  private Properties mendixProperties;
	
	@Scheduled(cron = "0 0/1 * * * *")	
	public void print() {
		  
		  

		DefaultHttpClient httpClient = new DefaultHttpClient();
		HttpGet getRequest = null;
		HttpResponse response = null;
		BufferedReader br = null;
		StringBuilder buildObject = new StringBuilder();
		StringBuilder deployObject = new StringBuilder();
		StringBuilder teamServerObject = new StringBuilder();
		StringBuilder teamServerRevisionObject = new StringBuilder();

		String buildOutput;
		String deployOutput;
		String teamServerOutput;
		String teamServerRevisionOutput;

		Object build;
		Object deploy;
		Object teamServerBranch;
		Object teamServerRevision;
		
		Mongo mongo = null;

		try {
			
			// To Get Build api details
			getRequest = new HttpGet("https://deploy.mendix.com/api/1/apps/"+mendixProperties.getAppname()+"/packages/"); //TODO need to pass app name dynamically..
			getRequest.addHeader("accept", "application/json");
			getRequest.addHeader("Mendix-Username", mendixProperties.getUsername());
			getRequest.addHeader("Mendix-ApiKey", mendixProperties.getApikey());

			response = httpClient.execute(getRequest);

			if (response.getStatusLine().getStatusCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + response.getStatusLine().getStatusCode());
			}

			br = new BufferedReader(new InputStreamReader((response.getEntity().getContent())));

			while ((buildOutput = br.readLine()) != null) {
				buildObject.append(buildOutput);
			}

			build = JSON.parse(buildObject.toString().toLowerCase());

			// To Get Deploy api details
			getRequest = new HttpGet("https://deploy.mendix.com/api/1/apps/"+mendixProperties.getAppname()+"/environments/"); //TODO need to pass app name dynamically..
			getRequest.addHeader("accept", "application/json");
			getRequest.addHeader("Mendix-Username", mendixProperties.getUsername());
			getRequest.addHeader("Mendix-ApiKey", mendixProperties.getApikey());

			response = httpClient.execute(getRequest);

			if (response.getStatusLine().getStatusCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + response.getStatusLine().getStatusCode());
			}

			br = new BufferedReader(new InputStreamReader((response.getEntity().getContent())));

			while ((deployOutput = br.readLine()) != null) {
				deployObject.append(deployOutput);
			}

			deploy = JSON.parse(deployObject.toString().toLowerCase());

			// To get Team Server api all branches details..
			getRequest = new HttpGet("https://deploy.mendix.com/api/1/apps/"+mendixProperties.getAppname()+"/branches/"); //TODO need to pass app name dynamically..
			getRequest.addHeader("accept", "application/json");
			getRequest.addHeader("Mendix-Username", mendixProperties.getUsername());
			getRequest.addHeader("Mendix-ApiKey", mendixProperties.getApikey());

			response = httpClient.execute(getRequest);

			if (response.getStatusLine().getStatusCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + response.getStatusLine().getStatusCode());
			}

			br = new BufferedReader(new InputStreamReader((response.getEntity().getContent())));

			while ((teamServerOutput = br.readLine()) != null) {
				teamServerObject.append(teamServerOutput);
			}

			teamServerBranch = JSON.parse(teamServerObject.toString().toLowerCase());

			// To get Team Server api branch revision details..
			getRequest = new HttpGet(
					"https://deploy.mendix.com/api/1/apps/"+mendixProperties.getAppname()+"/branches/trunk/revisions/"); //TODO need to pass app name and branch name dynamically..
			getRequest.addHeader("accept", "application/json");
			getRequest.addHeader("Mendix-Username", mendixProperties.getUsername());
			getRequest.addHeader("Mendix-ApiKey", mendixProperties.getApikey());

			response = httpClient.execute(getRequest);

			if (response.getStatusLine().getStatusCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + response.getStatusLine().getStatusCode());
			}

			br = new BufferedReader(new InputStreamReader((response.getEntity().getContent())));

			while ((teamServerRevisionOutput = br.readLine()) != null) {
				teamServerRevisionObject.append(teamServerRevisionOutput);
			}

			teamServerRevision = JSON.parse(teamServerRevisionObject.toString().toLowerCase());

			
			httpClient.getConnectionManager().shutdown();

			/************* Database part started **********************/

			// Mongo DB database connection
			mongo = new Mongo(mendixProperties.getDbhost(), 27017);  //TODO need to pass database hostName and portNumber using property file..

			System.out.println("Connected to the Mongo database successfully");

			// Getting database details by using database name
			DB db = mongo.getDB(mendixProperties.getDbname()); //TODO need to pass database name using property file..

			// Getting collection objects from existing database
			DBCollection collection = db.getCollection("mendixdata");

			// It will remove existing documents in collection object if exists..
			collection.remove(new BasicDBObject());

			BasicDBObject dbObject = new BasicDBObject();
			dbObject.append("_class","com.capitalone.dashboard.model.MendixData");
			dbObject.append("appname",mendixProperties.getAppname());
			dbObject.append("buildApiDetails", build);
			dbObject.append("deployApiDetails", deploy);
			dbObject.append("teamserverApiBranchDetails", teamServerBranch);
			dbObject.append("teamserverApiRevisionDetails", teamServerRevision);

			System.out.println("dbObject" + dbObject);

			collection.insert(dbObject);

			DBCursor cursorDocJSON = collection.find();
			while (cursorDocJSON.hasNext()) {
				System.out.println("cursorDocJSON : " + cursorDocJSON.next());
			}
			
		
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			mongo.close();

		}

}
}
