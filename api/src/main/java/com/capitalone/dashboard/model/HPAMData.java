package com.capitalone.dashboard.model;

import java.util.ArrayList;
import java.util.List;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection= "hpamdata")
public class HPAMData extends BaseModel{
	
	HPAMData(){
		
	}
	
	private List<HPAMBacklog> hpamBacklog = new ArrayList<>();
	private List<HPAMRelease> hpamRelease = new ArrayList<>();
	private List<HPAMTeam> hpamTeam = new ArrayList<>();
	private List<HPAMFeature> hpamFeature = new ArrayList<>();
	private List<HPAMWorkSpace> hpamWorkSpace = new ArrayList<>();
	

	
	public List<HPAMBacklog> getHpamBacklog() {
		return hpamBacklog;
	}
	public void setHpamBacklog(List<HPAMBacklog> hpamBacklog) {
		this.hpamBacklog = hpamBacklog;
	}
	
	public List<HPAMFeature> getHpamFeature() {
		return hpamFeature;
	}
	public void setHpamFeature(List<HPAMFeature> hpamFeature) {
		this.hpamFeature = hpamFeature;
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
	
	public HPAMData(List<HPAMFeature> hpamFeature,
			    	List<HPAMBacklog> hpamBacklog,
					List<HPAMRelease> hpamRelease,
					List<HPAMTeam> hpamTeam,
					List<HPAMWorkSpace> hpamWorkSpace) {
		super();
		this.hpamBacklog = hpamBacklog;
		this.hpamFeature= hpamFeature;
		this.hpamRelease = hpamRelease;
		this.hpamTeam = hpamTeam;
		this.hpamWorkSpace = hpamWorkSpace;
	}
	
	@Override
	public String toString() {
		return "hpamFeature=" + hpamFeature +
			   "hpamBacklog=" + hpamBacklog+
			   "hpamRelease=" + hpamRelease +
			   "hpamTeam=" + hpamTeam +
			   "hpamWorkSpace=" + hpamWorkSpace ;
	}
}
