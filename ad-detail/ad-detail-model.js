function parseAd(data) {
  return {
    name: data.nombre,
    description: data.descripcion,
    image: data.foto,
    price: data.precio,
    isSold: data.venta,
    id: data.id,
    userId: data.userId
  }
}

function parseUser(user) {
  return {
    id: user.id
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

export async function getUserData(token) {
  const url = 'http://localhost:8000/auth/me';

  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.json();
    return parseUser(data);
  } catch (error) {
    throw new Error('Error en datos del usuario')
  }
}

export async function deleteAd(adId, token) {
  const url = `http://localhost:8000/api/anuncios/${adId}`;

  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) {
      const data = await response.json()
      throw new Error(data.message);
    }
  } catch (error) {
    throw new Error('Error borrando anuncio')
  }
}