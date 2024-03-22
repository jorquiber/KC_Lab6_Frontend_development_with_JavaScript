import { adsListController } from "./ads-list/ads-controller.js";
import { notificationController } from "./notification/notification-controller.js";
import { sessionController } from "./session/session-controller.js";

document.addEventListener('DOMContentLoaded', () => {
  const adsList = document.querySelector('.ads-list');
  const notificationList = document.querySelector('.notification-list');
  const session = document.querySelector('#session');

  sessionController(session);
  const { showNotification } = notificationController(notificationList);

  adsList.addEventListener('error-loading-ads', (event) => {
    showNotification(event.detail.message, event.detail.type)
    event.stopPropagation();
  })
  adsListController(adsList);
})