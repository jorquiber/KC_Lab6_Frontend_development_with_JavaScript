import { createAd } from "./ad-creation-model.js";
import { loaderController } from "../loader/loader-controller.js";
import { dispatchEvent } from "../utils/dispatchEvent.js";

export function adCreationController(adCreation) {
  
  const spinner = adCreation.querySelector('#loader');
  const { showLoader, hideLoader } = loaderController(spinner);

  adCreation.addEventListener('submit', (event) => {
    event.preventDefault();

    submitAd(adCreation);
})

  const submitAd = async (adCreation) => {
    const formData = new FormData(adCreation);
    const newAdData = mapFormData2AdObject(formData);

    try {
      showLoader();
      await createAd(newAdData);
      dispatchEvent('adCreation-notification', {
        message: 'Se ha creado anuncio correctamente',
        type: 'success'
      }, adCreation);
      setTimeout(() => {
        window.location = "index.html";
      }, 2000);
    } catch (error) {
      dispatchEvent('adCreation-notification', {
        message: error,
        type: 'error'
      }, adCreation)
    } finally {
      hideLoader();
    }
  }
}

function mapFormData2AdObject (formData) {
  return  {
    name: formData.get("name"),
    description: formData.get("description"),
    image: formData.get("image"),
    price: formData.get("price"),
    isSold: formData.get("transaction") === "Venta" ? true : false
  };
}