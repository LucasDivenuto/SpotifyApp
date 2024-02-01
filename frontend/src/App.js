import React, { useEffect, useState } from 'react';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import Title  from './components/Title';
import Login  from './components/login';  
import axios from 'axios';

const URI = 'http://localhost:8000/app/';

const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {})
}


const App = () => {
  const [results, setResults] = useState([]);
  const [spotifyToken, setspotifyToken] = useState("");
  const [loggedIn, setloggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const spotifyToken = getTokenFromUrl().access_token;
    window.location.hash = "";
    console.log("Token: ", spotifyToken);

    if (spotifyToken) {
      setspotifyToken(spotifyToken);
      setloggedIn(true);
    }
  })

  const ObtenerFechaYyMmDd = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };


  
  const handleSearch = async (nombre) => {
    setErrorMessage("");
    
    if(nombre.trim() === ''){
      setErrorMessage("Ingrese el nombre de un artista.");
      setResults([]);
      return;
    }
    try {
      console.log(nombre);
      console.log(spotifyToken);

      // Primera solicitud POST

      const response1 = await axios.post(URI + 'buscar', {
        nombre,
        accessToken: spotifyToken.toString()
      });
      console.log('respuesta 1 ', response1.data);
      setResults(response1.data);

      // Segunda solicitud POST
      const fechaActual = ObtenerFechaYyMmDd();
      
      const response2 = await axios.post(URI + 'almacenar', {
        nombre,
        fecha: fechaActual,
      });
      console.log('respuesta 2 ', response2.data);

    } catch (error) {
      console.error(error);
      setErrorMessage("Hubo un error al realizar la búsqueda.");
    }
  };

  return (
    <div>
      {!loggedIn && <Login/>}
      {loggedIn && (
        <>
          <Title />
          <SearchForm onSearch={handleSearch} />
          {errorMessage ? (
             <p className="text-center alert alert-danger " role="alert">
             {errorMessage}
           </p>
          ) : (
            <SearchResults results={results} />
          )}
        </>
      )}
    </div>
  );
};
export default App;