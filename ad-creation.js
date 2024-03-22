import { adCreationController } from "./ad-creation/ad-creation-controller.js";
import { notificationController } from "./notification/notification-controller.js";

document.addEventListener('DOMContentLoaded', () => {

  const token = localStorage.getItem('token');

  if (!token) {
    window.location.href = 'index.html';
  }

  const adCreation = document.querySelector('#adCreation');
  const notificationList = document.querySelector('#notifications');

  const { showNotification } = notificationController(notificationList);

  adCreation.addEventListener('adCreation-notification', (event) => {
    showNotification(event.detail.message, event.detail.type)
    event.stopPropagation();
  })


  adCreationController(adCreation);
})

