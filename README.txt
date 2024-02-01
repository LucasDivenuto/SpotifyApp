1 - Clonar el repositorio: https://github.com/LucasDivenuto/SpotifyApp.git

2 - Crear Base de datos (para este paso sera necesario contar con XAMPP control panel, y phpMyAdmin)

	1. En XAMP dar start a MySQL y Apache
	2. Presionar Admin en la fila de MySQL
	3. Una vez abierto phpMyAdmim, crear una base de datos llamada 'dbentrega'
	4. Ir a la ventana SQL dentro de la base de datos creada y arrastrar el arcivo 'solicitudesartistas.sql'
	5. Confirmar accion

3. Ejecutar Backend:

	1. Abrir una nueva ventana en Visual Studio Code y arrastar la carpeta 'Backend'
	2. Abrir un nuevo terminal
	3. Moverse en la ruta hasta llegar a '..\Backend>'
	4. Ejecutar el comando 'node start.js'

4. Ejecutar Frontend

	1. Abrir una nueva ventana en Visual Studio Code y arrastar la carpeta 'frontend'
	2. Abrir un nuevo terminal
	3. Moverse en la ruta hasta llegar a '..\frontend>'
	4. Ejecutar el comando 'npm start'
