package com.capitalone.dashboard.model; 

public class HPAMApplication {
	private Application type;
	private int id;
	private String description;
	private String name;
	
	
	public Application getType() {
		return type;
	}
	public void setType(Application type) {
		this.type = type;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
}
