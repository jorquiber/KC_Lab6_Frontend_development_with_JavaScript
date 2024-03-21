export function buildAd(ad) {
    return `
    <a class="ad" href="ad-detail.html?adId=${ad.id}">
        <img src="${ad.image}" width="100">
        <p>${ad.name}</p>
        <p>Description: ${ad.description}</p>
        <p>${ad.price} €</p>
        <p>${ad.isSold ? "En venta" : "Se busca"}</p>
      </a>
    `
  }
  
  export function buildEmptyAdsList() {
    return '<h3>Lo sentimos, no hay productos disponibles</h3>';
  }