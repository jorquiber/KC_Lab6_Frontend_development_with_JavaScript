import { getAdDetail, getUserData, deleteAd } from "./ad-detail-model.js";
import { buildAdDetail } from "./ad-detail-view.js";
import { loaderController } from "../loader/loader-controller.js";
import { dispatchEvent } from "../utils/dispatchEvent.js";

export async function adDetailController(adDetail) {

  const params = new URLSearchParams(window.location.search)
  const adId = params.get('adId');
  if (!adId) {
    window.location.href = './index.html';
  }

  const spinner = adDetail.querySelector('#loader');
  const { showLoader, hideLoader } = loaderController(spinner);

  goBackButton(adDetail)

  try {
    showLoader();
    const ad = await getAdDetail(adId)
    handleRemoveAdButton(adDetail, ad);
    const container = adDetail.querySelector('#container');
    container.innerHTML = buildAdDetail(ad)
  } catch (errorMessage) {
    dispatchEvent('error-loading-ad-detail', {
      message: errorMessage,
      type: 'error'
    }, adDetail)
    window.location.href = './index.html';
  } finally {
    hideLoader();
  }


  function goBackButton(adDetail) {
    const backButton = adDetail.querySelector('#goHome');
    backButton.addEventListener('click', () => { window.location.href = './index.html' });
  }

  async function handleRemoveAdButton(adDetail, ad) {
    const token = localStorage.getItem('token');
    const userData = await getUserData(token);

    if (ad.userId === userData.id) {
      const removeAdButton = adDetail.querySelector('#removeAdButton')
      removeAdButton.style.display = "inline";
      removeAdButton.addEventListener('click', () => { removeAd(ad.id, token)})
    }
  }

  async function removeAd(adId, token) {
    if (window.confirm('Seguro que quieres borrar el anuncio?')) {
      try {
        await deleteAd(adId, token);
        setTimeout(() => {
          window.location.href = 'index.html'
        }, 2000);
      } catch (error) {
        alert(error)
      }
    }
  }
}
