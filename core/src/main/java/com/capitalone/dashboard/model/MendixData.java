package com.capitalone.dashboard.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "mendixdata")
public class MendixData extends BaseModel {

	MendixData() {

	}

	@DBRef
	private List<MendixBuild> buildApiDetails = new ArrayList<>();
	@DBRef
	private List<MendixDeploy> deployApiDetails = new ArrayList<>();
	@DBRef
	private List<MendixTeamServerBranch> teamserverApiBranchDetails = new ArrayList<>();
	@DBRef
	private List<MendixTeamServerRevision> teamserverApiRevisionDetails = new ArrayList<>();

	public List<MendixBuild> getBuildApiDetails() {
		return buildApiDetails;
	}

	public void setBuildApiDetails(List<MendixBuild> buildApiDetails) {
		this.buildApiDetails = buildApiDetails;
	}

	public List<MendixDeploy> getDeployApiDetails() {
		return deployApiDetails;
	}

	public void setDeployApiDetails(List<MendixDeploy> deployApiDetails) {
		this.deployApiDetails = deployApiDetails;
	}

	public List<MendixTeamServerBranch> getTeamserverApiBranchDetails() {
		return teamserverApiBranchDetails;
	}

	public void setTeamserverApiBranchDetails(List<MendixTeamServerBranch> teamserverApiBranchDetails) {
		this.teamserverApiBranchDetails = teamserverApiBranchDetails;
	}

	public List<MendixTeamServerRevision> getTeamserverApiRevisionDetails() {
		return teamserverApiRevisionDetails;
	}

	public void setTeamserverApiRevisionDetails(List<MendixTeamServerRevision> teamserverApiRevisionDetails) {
		this.teamserverApiRevisionDetails = teamserverApiRevisionDetails;
	}

	public MendixData(List<MendixBuild> buildApiDetails, List<MendixDeploy> deployApiDetails,
			List<MendixTeamServerBranch> teamserverApiBranchDetails,
			List<MendixTeamServerRevision> teamserverApiRevisionDetails) {
		super();
		this.buildApiDetails = buildApiDetails;
		this.deployApiDetails = deployApiDetails;
		this.teamserverApiBranchDetails = teamserverApiBranchDetails;
		this.teamserverApiRevisionDetails = teamserverApiRevisionDetails;
	}

	@Override
	public String toString() {
		return "MendixData [buildApiDetails=" + buildApiDetails + ", deployApiDetails=" + deployApiDetails
				+ ", teamserverApiBranchDetails=" + teamserverApiBranchDetails + ", teamserverApiRevisionDetails="
				+ teamserverApiRevisionDetails + "]";
	}

}
