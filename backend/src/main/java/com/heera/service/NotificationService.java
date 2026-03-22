package com.heera.service;

import java.util.List;

import com.heera.dto.NotificationDTO;
import com.heera.entity.Notification;
import com.heera.exception.JobPortalException;

public interface NotificationService {
	public void sendNotification(NotificationDTO notificationDTO) throws JobPortalException;
	public List<Notification> getUnreadNotifications(Long userId);
	public void readNotification(Long id) throws JobPortalException;
}
