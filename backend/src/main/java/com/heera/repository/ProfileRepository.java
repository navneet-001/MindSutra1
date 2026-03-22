package com.heera.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.heera.entity.Profile;

public interface ProfileRepository extends MongoRepository<Profile, Long> {
	
}
