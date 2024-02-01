
import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [nombre, setNombre] = useState('');

  const handleInputChange = (event) => {
    setNombre(event.target.value);
  };

  const handleSearchClick = () => {

    if (onSearch) {
      onSearch(nombre);
    }
  };

  return (

    <div className="container">
  <div className="row">
    <div className="col-md-12 mx-auto">
      <table className="table table-bordered table-striped mt-4 table-responsive">
        <div className="d-flex mb-3">
      <input
        type="text"
        className="form-control mr-2"
        placeholder="Nombre del artista"
        value={nombre}
        onChange={handleInputChange}
      />
      <button className="fa-brands fa-spotify pl-2" onClick={handleSearchClick} >
           Buscar
      </button>
    </div>
      </table>
    </div>
  </div>
</div>
    
  );
};

export default SearchForm;