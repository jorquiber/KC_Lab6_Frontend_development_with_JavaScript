import { adsListController } from "./ads-list/ads-controller.js";

document.addEventListener('DOMContentLoaded', () => {
  const adsList = document.querySelector('.ads-list');

  adsListController(adsList);
})