package com.capitalone.dashboard.model;

import java.util.ArrayList;
import java.util.List;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection= "hpamdata")
public class HPAMData extends BaseModel{
	
	HPAMData(){
		
	}
	private List<HPAMApplication> hpamApplication = new ArrayList<>();
	private List<HPAMBacklog> hpamBacklog = new ArrayList<>();
	private List<HPAMRelease> hpamRelease = new ArrayList<>();
	private List<HPAMTeam> hpamTeam = new ArrayList<>();
	private List<HPAMWorkSpace> hpamWorkSpace = new ArrayList<>();
	
	public List<HPAMApplication> getHpamApplication() {
		return hpamApplication;
	}
	public void setHpamApplication(List<HPAMApplication> hpamApplication) {
		this.hpamApplication = hpamApplication;
	}
	
	public List<HPAMBacklog> getHpamBacklog() {
		return hpamBacklog;
	}
	public void setHpamBacklog(List<HPAMBacklog> hpamBacklog) {
		this.hpamBacklog = hpamBacklog;
	}
	
	public List<HPAMRelease> getHpamRelease() {
		return hpamRelease;
	}
	public void setHpamRelease(List<HPAMRelease> hpamRelease) {
		this.hpamRelease = hpamRelease;
	}
	
	public List<HPAMTeam> getHpamTeam() {
		return hpamTeam;
	}
	public void setHpamTeam(List<HPAMTeam> hpamTeam) {
		this.hpamTeam = hpamTeam;
	}
	
	public List<HPAMWorkSpace> getHpamWorkSpace() {
		return hpamWorkSpace;
	}
	public void setHpamWorkSpace(List<HPAMWorkSpace> hpamWorkSpace) {
		this.hpamWorkSpace = hpamWorkSpace;
	}
	
	public HPAMData(List<HPAMApplication> hpamApplication,
			    	List<HPAMBacklog> hpamBacklog,
					List<HPAMRelease> hpamRelease,
					List<HPAMTeam> hpamTeam,
					List<HPAMWorkSpace> hpamWorkSpace) {
		super();
		this.hpamApplication= hpamApplication;
		this.hpamBacklog = hpamBacklog;
		this.hpamRelease = hpamRelease;
		this.hpamTeam = hpamTeam;
		this.hpamWorkSpace = hpamWorkSpace;
	}
	
	@Override
	public String toString() {
		return "hpamApplication=" + hpamApplication +
			   "hpamBacklog=" + hpamBacklog+
			   "hpamRelease=" + hpamRelease +
			   "hpamTeam=" + hpamTeam +
			   "hpamWorkSpace=" + hpamWorkSpace ;
	}
}
