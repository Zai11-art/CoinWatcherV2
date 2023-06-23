import React from "react";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import { useEffect } from "react";

const Notifications = ({ notifications }) => {
  const [visibleNotifications, setVisibleNotifications] = useState([]);

  useEffect(() => {
    if (notifications.length > 0) {
      showNotification(notifications[0]);
    }
  }, [notifications]);

  const showNotification = (notification) => {
    setVisibleNotifications((prevNotifications) => {
      const updatedNotifications = [...prevNotifications, notification];
      setTimeout(() => {
        removeNotification(notification);
      }, 5000);
      return updatedNotifications;
    });
  };

  const removeNotification = (notificationToRemove) => {
    setVisibleNotifications((prevNotifications) => {
      const updatedNotifications = prevNotifications.filter(
        (notification) => notification !== notificationToRemove
      );
      return updatedNotifications;
    });
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      {visibleNotifications.map((notification, index) => (
        <div
          key={notification.id}
          className={`bg-gray-800 text-white rounded-md p-4 shadow-md mt-2 transition-all duration-500 ease-in-out delay-${index}`}
        >
          {notification.message}
        </div>
      ))}
    </div>
  );
};

export default Notifications;
