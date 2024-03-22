import { loginController } from "./login/login-controller.js";
import { notificationController } from "./notification/notification-controller.js";

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('#login');
  const notifications = document.querySelector('#notifications');
  
  const { showNotification } = notificationController(notifications)
  
  loginForm.addEventListener('signin-notification', (event) => {
    event.stopPropagation()
    showNotification(event.detail.message, event.detail.type)
  })

  loginController(loginForm);
})
