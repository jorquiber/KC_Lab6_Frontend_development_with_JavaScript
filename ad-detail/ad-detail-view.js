export function buildAdDetail(ad) {
  return `
  <div class="ad">
    <img src="${ad.image}">
    <p>${ad.name}</p>
    <p>${ad.description}</p>
    <p>${ad.price} €</p>
    <p>${ad.isSold ? "En venta" : "Se busca"}</p>
  </div>
  `
}
