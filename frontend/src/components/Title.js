import React from 'react';

const Title = () => {
  return (
    <div className="text-center">
      <img
        src= "/spotify.png" // Ajusta la ruta a tu propio logo de Spotify
        alt="Logo de Spotify"
        style={{ width: '75px', height: '75px' }} // Ajusta el tamaño según tus necesidades
      />
      <h1>Encontrá tu album</h1>
    </div>
  );
};

export default Title;