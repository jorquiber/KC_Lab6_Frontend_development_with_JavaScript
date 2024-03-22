function parseAd(data) {
  return {
    name: data.nombre,
    description: data.descripcion,
    image: data.foto,
    price: data.precio,
    isSold: data.venta,
    id: data.id
  }
}

export async function getAdDetail(adId) {
  const url = `http://localhost:8000/api/anuncios/${adId}`;

  try {
    const response = await fetch(url);
    if (response.status === 404) {
      throw new Error('El anuncio no existe')
    }
    const data = await response.json();
    const ad = parseAd(data);
    return ad;
  } catch (error) {
    throw new Error(error.message)
  }

}
