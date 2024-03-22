export const buildSession = () => {
  return `
    <a href="./login.html">Iniciar sesión</a>
    <a href="./signup.html">Signup</a>
    `;
}

export const buildAuthenticatedSession = () => {
  return `<button>Cerrar sesión</button> <a href="./create-ad.html">Crear anuncio</a>`;
}
