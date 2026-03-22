package com.heera.service;

import java.util.List;

import com.heera.dto.ApplicantDTO;
import com.heera.dto.Application;
import com.heera.dto.ApplicationStatus;
import com.heera.dto.JobDTO;
import com.heera.exception.JobPortalException;



public interface JobService {

	public JobDTO postJob(JobDTO jobDTO) throws JobPortalException;

	public List<JobDTO> getAllJobs() throws JobPortalException;

	public JobDTO getJob(Long id) throws JobPortalException;

	public void applyJob(Long id, ApplicantDTO applicantDTO) throws JobPortalException;

	public List<JobDTO> getHistory(Long id, ApplicationStatus applicationStatus);

	public List<JobDTO> getJobsPostedBy(Long id) throws JobPortalException;

	public void changeAppStatus(Application application) throws JobPortalException;
	
	

}
