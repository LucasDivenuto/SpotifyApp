import {exec} from 'child_process' 
 //Est es para que se me ejecuten ambos app.js a la vez, ya que ambos "escuchan" distintos puertos.
const authorization = './AuthorizationSpotify/app2.js';
const app = './app.js';

exec(`nodemon ${authorization}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al ejecutar ${auth}: ${error}`);
  }
});

exec(`nodemon ${app}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al ejecutar ${app}: ${error}`);
  }
});