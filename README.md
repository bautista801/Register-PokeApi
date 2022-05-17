Este proyecto fue hecho con JavaScript, utilizando la librería React.JS, tambien se implementó Bootstrap para los estilos de los elementos HTML. El proyecto se basa en un registro de usuario a través de la cuenta de Google, al presionar el botón para iniciar sesión por primera vez, el usuario podrá elegir la cuenta con la que quiere registrarse, una vez elegida la cuenta se desbloquea en la página la sección "Inicio", el cual se redirige automaticamente, y también la sección "Perfil", en la sección Inicio, se muestra la api de Pokemones (Pokeapi), en la cual al presionar el botón "Obtener pokemones" se trae desde la api los primeros 20 pokemones, al mismo tiempo aparece el botón "Siguiente", el cual al presionarlo traerá los siguientes 20 pokemones en la lista, y a su mismo tiempo aparece el botón "Anterior", el cual al presionarlo volverá a la lista de los 20 pokemones anteriores, también se incluyó en cada pokemon un botón "Info", el cual al presionarlo pintará en pantalla los detalles del pokemon seleccionado.
En la sección Perfil, el usuario podrá ver su foto, su nombre de usuario y su correo, y 2 botones adicionales los cuales son "Editar Nombre" y "Actualizar Imagen", ambos botones proporcionan la función correspondiente para poder cambiar el nombre de usuario, y cargar una foto de perfil, la cual podrá seleccionar desde su computadora, quedando guardada en la base de datos de Firebase, de manera que el usuario pueda dejarla siempre.
a su vez, en el menú estará el botón "Logout", el cual simplemente cerrará la sesión de usuario, llevandolo al "Login"

El proyecto fue publicado en Vercel:
https://register-poke-api.vercel.app/login

Tambien su utilizó el hosting de Firebase:
https://resgistro-be2af.web.app/Login
