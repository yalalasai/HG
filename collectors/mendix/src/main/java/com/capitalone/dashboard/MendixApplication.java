package com.capitalone.dashboard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.ApplicationContext;
import org.springframework.scheduling.annotation.EnableScheduling;
import com.capitalone.dashboard.collector.DefaultMendixClient;
import com.capitalone.dashboard.model.Properties;

@EnableScheduling
@SpringBootApplication
@EnableConfigurationProperties(Properties.class)
public class MendixApplication {

	public static void main(String[] args) {
		SpringApplication.run(MendixApplication.class, args);
		ApplicationContext context = SpringApplication.run(MendixApplication.class, args);
		DefaultMendixClient mendixClient = context.getBean(DefaultMendixClient.class);
		mendixClient.print();
	}
}
