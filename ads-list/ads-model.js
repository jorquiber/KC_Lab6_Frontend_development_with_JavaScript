function parseAds(data) {
    return data.map(data => ({
      name: data.nombre,
      description: data.descripcion,
      image: data.foto,
      price: data.precio,
      isSold: data.venta,
      id: data.id
    }))
  }
  
  export async function getAds() {
    const url = 'http://localhost:8000/api/anuncios';
    let ads = [];
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      ads = parseAds(data);
    } catch (error) {
      throw new Error('Error obteniendo productos')
    }
    
    return ads;
  
  }