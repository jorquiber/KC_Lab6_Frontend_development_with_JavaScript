import { loaderController } from "../loader/loader-controller.js";
import { dispatchEvent } from "../utils/dispatchEvent.js";
import { createUser } from "./signup-model.js";


export function signupController(signupForm) {
  const spinner = signupForm.querySelector('#spinner');
  const { showLoader, hideLoader } = loaderController(spinner);

  signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); // evitamos validación en servidor
    
    handleSignupFormSubmit(signupForm)
  })

  function handleSignupFormSubmit(signupForm) {
    let errors = [];

    if (!isEmailValid(signupForm)) {
      errors.push('el email no tiene un formato correcto')      
    }
  
    if (!arePasswordsEqual(signupForm)) {
      errors.push('las contraseñas no son iguales')
    }

    showFormErrors(errors);
  
    if (errors.length === 0) {
      signupUser(signupForm);
    }
  }

  function isEmailValid(signupForm) {
    const email = signupForm.querySelector('#email');
    const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    return emailRegExp.test(email.value)
  }

  function arePasswordsEqual(signupForm) {
    const password = signupForm.querySelector('#password');
    const passwordConfirmation = signupForm.querySelector('#password-confirmation');
    
    return password.value === passwordConfirmation.value;
  }

  function showFormErrors(errors) {
    for (const error of errors) {
      dispatchEvent('signup-notification', {
        message: error,
        type: 'error'
      }, signupForm)
    }
  }

  async function signupUser(signupForm) {
    const email = signupForm.querySelector('#email');
    const password = signupForm.querySelector('#password');

    try {
      showLoader()
      await createUser(email.value, password.value)
      dispatchEvent('signup-notification', {
        message: 'Te has registrado correctamente',
        type: 'success'
      }, signupForm)
      
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 2000);
    } catch (error) {
      dispatchEvent('signup-notification', {
        message: error,
        type: 'error'
      }, signupForm)
    } finally {
      hideLoader()
    }
  }
  
}
