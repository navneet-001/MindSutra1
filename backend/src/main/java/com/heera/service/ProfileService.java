package com.heera.service;

import java.util.List;

import com.heera.dto.ProfileDTO;
import com.heera.dto.UserDTO;
import com.heera.exception.JobPortalException;

public interface ProfileService {
	public Long createProfile(UserDTO userDTO) throws JobPortalException;

	public ProfileDTO getProfile(Long id) throws JobPortalException;

	public ProfileDTO updateProfile(ProfileDTO profileDTO) throws JobPortalException;

	public List<ProfileDTO> getAllProfiles() throws JobPortalException;
}
