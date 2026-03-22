package com.heera.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.heera.dto.NotificationStatus;
import com.heera.entity.Notification;

public interface NotificationRepository extends MongoRepository<Notification, Long> {
	public List<Notification> findByUserIdAndStatus(Long userId, NotificationStatus status);
}
