import { getAdDetail } from "./ad-detail-model.js";
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
}
