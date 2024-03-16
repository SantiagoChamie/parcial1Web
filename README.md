# parcial1Web
Santiago Chamie Rey - 202122182

Para correr este proyecto se deben seguir lo siguientes pasos
1. Ubicarse en la carpeta parcial1
2. Escribir el comando npm install
3. Escribir el comando npm install react-boostrap bootstrap
4. Escribir el comando npm install react-intl --save
5. Escribir el comando npm start, y esperar a que empiece a que se termine de correr el comando
6. Abrir la página http://localhost:3000

Reporte de decisiones:
C1 Home (40%)
Se decidió desplegar la página de inicio dentro de la ruta '/' para que fuera lo primero que se vea al cargar el proyecto. 
Usando las clases Container, Row y Col de react bootstrap ordené la imagen de perfil, los datos de perfil y las imágenes para que se vieran ordenadas similar a como están en el enunciado. Se utilizó un hook de efecto para hacer fetch de los datos del API de mookaroo creado para este ejercicio y cargarlos a las variables de estado de React para cada uno de los valores del perfil.
A cada imagen se le asignó su valor basado en el link dado por el profesor, utilizando la clase Image de react bootstrap.
Todo esto está en el componente home.js

C2 Perfil (25%)
El perfil se desplegó en la ruta '/profile' que carga el componente profile.js, la cual utiliza los componentes Container, Row y Col de react boostrap para ordenar los componentes como se disponen en el enunciado. Se utilizó una mezcla de <p> y <input> de html para hacer el formulario.
Se utilizó una Imagen de react bootstrap para mostrar la imagen del perfil y un Button de react bootstrap para hacer la navegación de vuelta a la página principal una vez el usuario haya cambiado su información.

C3 Ver Detalle Post (15%)
La información de detalle de un post se creó dentro del componente home.js utilizando un Modal de react boostrap. Este modal está oculto hasta que haga click en uno de los posts del perfil lo cual lo hace visible. Este muestra una versión más grande de la imagen y tiene un botón para cerrarse.

I18N (10%)
Para el desarrollo de esta parte del parcial se usó la librería react-intl que permite elegir texto basado en archivos json para cada idioma disponible para desplegarse en los lugares donde se utilice texto estático. Se usa la clase FormattedMessage de react-intl para llamar el valor del archivo .json asociado al idioma de la página