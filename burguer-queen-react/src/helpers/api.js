import axios from "axios";
const dominiolocal = 'http://localhost:8080'
// const dominio = 'https://burger-queen-api-mock-production-7906.up.railway.app'

export async function httpLogin(usuario, contrasena) {
  try {
    const response = await axios.post(`${dominiolocal}/login`,
    // cuerpo: body de la peticion post, lo que yo envio al servidor
    {
      "email": usuario,
      "password": contrasena
    }, {
      // cabecera: indico el tipo de dato que envio en este caso un json
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // devuelvo la data si todo va bien
    return response.data;
  } catch (error) {
    return "error";
  }
}