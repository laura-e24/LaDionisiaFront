# La Dionisia

Ecommerce de vinos. Aquí podrán registrarse e iniciar sesión con su email o cuenta de Google, lo que les permitirá acceder a toda la tienda y ver todos los productos disponibles; filtrándolos u ordenándolos según diversos parámetros para que encuentres el vino que más te guste.
Una vez seleccionados los productos deseados y tener tu carrito de compras, podrás proceder al pago mediante tarjeta de crédito o PayPal, y se te enviará un mensaje con todos los datos de la compra a tu casilla de email con la que te registraste.
Asimismo, si deseás un producto pero no vas a comprarlo inmediatamente, disponés de la opción de guardarlo en favoritos para adquirirlo más adelante.
Además, existe la posibilidad de ser usuario administrador, el cual tiene acceso a un dashboard privado donde verá todos los productos subidos a su tienda y podrá editar toda su información o incluso eliminar o desactivar alguno y agregar nuevos. También cuenta con un panel de estadísticas donde muestra los gráficos de ventas, sumado a otro panel donde se muestran todos los usuarios registrados. 

Por otro lado, los usuarios registrados tienen la posibilidad de dejar reseñas y puntuación en los vinos, las cuales pueden ser reportadas por otros usuarios en caso de considerarlas ofensivas, lo que ocultará el comentario, notificará al administrador y el mismo, desde su panel de comentarios, podrá moderarlos y decidir si eliminar o permitir el comentario reportado.
## Cómo utilizar la aplicación

### Backend

Abrir en una terminal la carpeta 'api' y utilizar el comando ```npm install```. Esto instalará todas las dependencias necesarias para correr la API de la aplicación, luego para iniciarla utilizar ```npm start```. El servidor comenzará a operar en el puerto 3001.

Para visualizar la documentación de la API ir a la ruta __/api/files/data__

Para correr los tests que validan la API usar el comando ```npm test```.

_IMPORTANTE: Utilizar la versión 14 de Node.js o de lo contrario no funcionará la API._

### Frontend

Abrir en otra terminal la carpeta 'client' y utilizar el comando ```npm install```. 

Para iniciar la aplicación utilizar ```npm start```.

_IMPORTANTE: Utilizar la versión 16 de Node.js o de lo contrario no funcionará la aplicación._
