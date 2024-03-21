import {buildAd, buildEmptyAdsList } from "./ads-view.js";
import {getAds} from "./ads-model.js"
import { loaderController } from "../loader/loader-controller.js";

export async function adsListController(adsList) {
  
    const spinner = adsList.querySelector('#loader');
    const { showLoader, hideLoader } = loaderController(spinner)
    
    try {
      showLoader();
      const ads = await getAds();
      if (ads.length > 0) {
        renderAds(ads, adsList);
      } else {
        renderEmptyAdsList(adsList);
      }
    } catch (errorMessage) {
      alert(errorMessage)
    } finally {
      hideLoader();
    }
  
  }
  
  function renderAds(ads, adsList) {
    ads.forEach(ads => {
      const adItem = document.createElement('div');
      adItem.innerHTML = buildAd(ads);
      adsList.appendChild(adItem)
    })
  }
  
  function renderEmptyAdsList(adsList) {
    adsList.innerHTML = buildEmptyAdsList();
  }
