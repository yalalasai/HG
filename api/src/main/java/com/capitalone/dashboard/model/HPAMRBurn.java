package com.capitalone.dashboard.model;

import java.io.Serializable;

public class HPAMBacklog implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Object applicationid;
	private Object featureid;
	private Object sprintid;
	private String name;
	private Object teamid;
	private Object releaseid;
	private Object themeid;
	private Object storypoints;
	private String status;
	private int backlogid;
	private int workspaceid;
	
	
	public Object getStorypoints() {
		return storypoints;
	}
	public void setStorypoints(Object storypoints) {
		this.storypoints = storypoints;
	}
	public Object getApplicationid() {
		return applicationid;
	}
	public void setApplicationid(Object applicationid) {
		this.applicationid = applicationid;
	}
	public Object getFeatureid() {
		return featureid;
	}
	public void setFeatureid(Object featureid) {
		this.featureid = featureid;
	}
	public Object getSprintid() {
		return sprintid;
	}
	public void setSprintid(Object sprintid) {
		this.sprintid = sprintid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Object getTeamid() {
		return teamid;
	}
	public void setTeamid(Object teamid) {
		this.teamid = teamid;
	}
	public Object getReleaseid() {
		return releaseid;
	}
	public void setReleaseid(Object releaseid) {
		this.releaseid = releaseid;
	}
	public Object getThemeid() {
		return themeid;
	}
	public void setThemeid(Object themeid) {
		this.themeid = themeid;
	}

//	public ObjectId getStorypoints() {
//		return storypoints;
//	}
//	public void setStorypoints(ObjectId storypoints) {
//		this.storypoints = storypoints;
//	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getBacklogid() {
		return backlogid;
	}
	public void setBacklogid(int backlogid) {
		this.backlogid = backlogid;
	}
	public int getWorkspaceid() {
		return workspaceid;
	}
	public void setWorkspaceid(int workspaceid) {
		this.workspaceid = workspaceid;
	}
	

		
}
