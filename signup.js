import { notificationController } from "./notification/notification-controller.js";
import { signupController } from "./signup/signup-controller.js";


document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.querySelector('#register-form');
  const notifications = document.querySelector('#notifications');
  
  const { showNotification } = notificationController(notifications)
  
  signupForm.addEventListener('signup-notification', (event) => {
    event.stopPropagation()
    showNotification(event.detail.message, event.detail.type)
  })
  
  signupController(signupForm);
})
