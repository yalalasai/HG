package com.capitalone.dashboard.model;

public class HPAMTeam {
	private int estimatedvelocity;
	private Object releaseid;
	private int numberofmembers;
	private int memberscapacity;
	private String description;
	private String name;
	private int teamid;
	private String type;
	
	public int getEstimatedvelocity() {
		return estimatedvelocity;
	}
	public void setEstimatedvelocity(int estimatedvelocity) {
		this.estimatedvelocity = estimatedvelocity;
	}
	public Object getReleaseid() {
		return releaseid;
	}
	public void setReleaseid(Object releaseid) {
		this.releaseid = releaseid;
	}
	public int getNumberofmembers() {
		return numberofmembers;
	}
	public void setNumberofmembers(int numberofmembers) {
		this.numberofmembers = numberofmembers;
	}
	public int getMemberscapacity() {
		return memberscapacity;
	}
	public void setMemberscapacity(int memberscapacity) {
		this.memberscapacity = memberscapacity;
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

	public int getTeamid() {
		return teamid;
	}
	public void setTeamid(int teamid) {
		this.teamid = teamid;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
}
