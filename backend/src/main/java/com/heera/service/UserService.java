package com.heera.service;

import com.heera.dto.LoginDTO;
import com.heera.dto.ResponseDTO;
import com.heera.dto.UserDTO;
import com.heera.exception.JobPortalException;




public interface UserService {

	public UserDTO registerUser(UserDTO userDTO) throws JobPortalException;
	public UserDTO getUserByEmail(String email)throws JobPortalException;

	public UserDTO loginUser(LoginDTO loginDTO) throws JobPortalException;

	public Boolean sendOTP(String email) throws  Exception;

	public Boolean verifyOtp( String email, String otp) throws JobPortalException;

	public ResponseDTO changePassword( LoginDTO loginDTO) throws JobPortalException;
	
}
