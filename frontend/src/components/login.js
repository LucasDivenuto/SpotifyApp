import React from 'react';

const Login = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-80">
            <div className="text-center">
            <h1>Usted aún no está autenticado. Si desea hacer uso de la aplicación, debe iniciar sesión con su cuenta de Spotify</h1>
            <a href="http://localhost:8888/login" className="btn btn-primary mt-5">Iniciar sesión en Spotify</a>
        </div>
    </div >
  );
}

export default Login;