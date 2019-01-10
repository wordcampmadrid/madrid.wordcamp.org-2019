# WordCamp Madrid 2019 Website CSS

Hola!

Este proyecto crea el CSS que carga la página web de la WordCamp Madrid 2019.

Lo primero, ¡gracias por colaborar!, atenderemos los Pull Request e Issues tan pronto como nos sea posible :-)

Cómo trabajar con el proyecto.

Estamos usando SASS para compilar los estilos e intentar tenerlos un poco organizados.

[Guía de SASS](https://sass-lang.com/guide)

La compilación de SASS a CSS lo hace Webpack, para ello debemos:

Instalar las dependencias

``` npm install ```

Una vez instaladas las dependencias, podemos: 
+ Compilar el CSS con cada cambio realizado en los archivos SCSS usando ``` npm run watch ```
+ Compilar la versión definitiva a subir usando ``` npm run build ```

Ignorad el app.js del proyecto así como el bundle.js que genera, webpack necesita por defecto un archivo de javascript y usamos ese, pero lo que nos interesa subir el style.css generado.