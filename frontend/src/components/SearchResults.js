import React from 'react';

const SearchResults = ({ results }) => {
  const resultsArray = results.albums;
  if (!Array.isArray(resultsArray) || resultsArray.length === 0) {
    return// return <p>Ingrese el nombre de un artista.</p>;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <table className="table table-bordered table-striped mt-4 table-responsive">
            <thead className="thead-dark">
              <tr>
                <th className="text-center">Portada</th>
                <th className="text-center">Nombre del álbum</th>
                <th className="text-center">Popularidad</th>
              </tr>
            </thead>
            <tbody>
              {resultsArray.map(album => (
                <tr key={album.id}>
                  <td className="text-center">
                    {Array.isArray(album.images) && album.images.length > 0 ? (
                      <img
                        src={album.images[0]}
                        alt={`Imagen 0`}
                        style={{ width: '100px', height: '100px' }}
                      />
                    ) : null}
                  </td>
                  <td className="text-center">{album.title}</td>

                  <td className="text-center">{album.popularity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
};

export default SearchResults;