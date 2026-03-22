package com.heera.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.heera.dto.ProfileDTO;
import com.heera.dto.UserDTO;
import com.heera.entity.Profile;
import com.heera.exception.JobPortalException;
import com.heera.repository.ProfileRepository;
import com.heera.utility.Utilities;

@Service("profileService")
public class ProfileServiceImpl implements ProfileService {

	@Autowired
	private ProfileRepository profileRepository;
	
	@Override
	public Long createProfile(UserDTO userDTO) throws JobPortalException {
		Profile profile=new Profile();
		profile.setId(Utilities.getNextSequenceId("profiles"));
		profile.setEmail(userDTO.getEmail());
		profile.setName(userDTO.getName());
		profile.setSkills(new ArrayList<>());
		profile.setExperiences(new ArrayList<>());
		profile.setCertifications(new ArrayList<>());
		profileRepository.save(profile);
		return profile.getId();
	}

	@Override
	public ProfileDTO getProfile(Long id) throws JobPortalException {
		return profileRepository.findById(id).orElseThrow(()->new JobPortalException("PROFILE_NOT_FOUND")).toDTO();
	}

	@Override
	public ProfileDTO updateProfile(ProfileDTO profileDTO) throws JobPortalException {
		profileRepository.findById(profileDTO.getId()).orElseThrow(()->new JobPortalException("PROFILE_NOT_FOUND"));
		profileRepository.save(profileDTO.toEntity());
		return profileDTO;
	}

	@Override
	public List<ProfileDTO> getAllProfiles() throws JobPortalException {
		return profileRepository.findAll().stream().map((x)->x.toDTO()).toList();
	}
	

}
