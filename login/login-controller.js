import { loaderController } from "../loader/loader-controller.js";
import { loginUser } from "./login-model.js";
import { dispatchEvent } from "../utils/dispatchEvent.js";

export const loginController = (loginForm) => {
  const spinner = loginForm.querySelector('#loader');
  const { showLoader, hideLoader } = loaderController(spinner)

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    submitLogin(loginForm)
  })

  const submitLogin = async (loginForm) => {
  
    const { email, password } = getLoginData(loginForm);
    try {
      showLoader();
      const jwt = await loginUser(email, password)
      dispatchEvent('signin-notification', {
        message: 'Login OK',
        type: 'success'
      }, loginForm)
      localStorage.setItem('token', jwt);
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1000);
    } catch (error) {
      dispatchEvent('signin-notification', {
        message: error,
        type: 'error'
      }, loginForm)
    } finally {
      hideLoader()
    }
  }
  
  const getLoginData = (loginForm) => {
    const formData = new FormData(loginForm);
    const email = formData.get('email');
    const password = formData.get('password');
  
    return {
      email: email,
      password: password
    }
  }
}
