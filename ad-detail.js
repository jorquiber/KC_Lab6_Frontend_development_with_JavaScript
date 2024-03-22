import { adDetailController } from "./ad-detail/ad-detail-controller.js";
import { notificationController } from "./notification/notification-controller.js";


document.addEventListener('DOMContentLoaded', () => {
  const adDetail = document.querySelector('#adDetail');
  const notificationList = document.querySelector('.notification-list');

  const { showNotification } = notificationController(notificationList);

  adDetail.addEventListener('error-loading-ad-detail', (event) => {
    showNotification(event.detail.message, event.detail.type)
    event.stopPropagation();
  })
  adDetailController(adDetail)
})
