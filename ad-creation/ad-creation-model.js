function parseAd(ad) {
  return {
    nombre: ad.name,
    descripcion: ad.description,
    foto: ad.image,
    precio: ad.price,
    venta: ad.isSold
  }
}

export const createAd = async (newAdData) => {
  const url = "http://localhost:8000/api/anuncios";
  const token = localStorage.getItem('token');

  const body = parseAd(newAdData);

  let response;
  try {
    response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    
    if (!response.ok) {
      const data = await response.json()
      throw new Error(data.message);
    }
  } catch (error) {
    if (error.message) {
      throw error.message;
    } else {
      throw error;
    }
  }
}
