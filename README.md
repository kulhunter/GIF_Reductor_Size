# Reductor de tamaño de GIFs

Este es un proyecto que tiene como objetivo reducir el tamaño de los archivos GIF para que sean más fáciles de compartir y cargar en la web. Esta aplicación web está diseñada para funcionar directamente en el navegador, por lo que no es necesario instalar ningún software adicional.

## Cómo utilizar la aplicación

1. Abre la página web en tu navegador.
2. Selecciona un archivo GIF desde tu computadora haciendo clic en el botón "Seleccionar archivo".
3. Haz clic en el botón "Reducir tamaño" para comenzar la reducción del archivo GIF.
4. Espera a que la aplicación termine de procesar el archivo. Esto puede tomar varios segundos, dependiendo del tamaño del archivo y la velocidad de tu conexión a internet.
5. Descarga el archivo reducido haciendo clic en el botón "Descargar archivo".

## Limitaciones

v1. Actualmente, la aplicación solo es capaz de reducir el tamaño de archivos GIF estáticos. Si el archivo GIF contiene animaciones o características avanzadas, es posible que la aplicación no sea capaz de procesarlo correctamente.

V2. En este update, hemos agregado la biblioteca giflossy al archivo JavaScript utilizando la etiqueta script en el HTML. Luego, hemos modificado la función reduceGifSize para que utilice la biblioteca giflossy para reducir el tamaño del archivo GIF. Además, también hemos modificado el código para que pueda descargar archivos GIF animados en lugar de solo archivos GIF estáticos.

## Tecnologías utilizadas

Este proyecto se ha desarrollado utilizando las siguientes tecnologías:

- HTML5
- CSS3
- JavaScript
- gif-lossy (una biblioteca de JavaScript para la compresión de archivos GIF)

## Cómo contribuir

Si deseas contribuir a este proyecto, puedes hacer lo siguiente:

1. Realiza un fork del repositorio en GitHub.
2. Haz tus cambios y realiza un commit con una descripción clara de lo que has modificado.
3. Envía un pull request a este repositorio para que podamos revisar tus cambios.

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo LICENSE.md para obtener más información.
