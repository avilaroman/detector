# [Traductor de Cosas](https://thing-translator.appspot.com/)
### [Un Experimento AI](https://aiexperiments.withgoogle.com/)
✨ [Podés probar en el proyecto original corriendo en:](https://thing-translator.appspot.com/) - $npm run watch✨

![](https://oxism.com/thing-translator/thing-translator.gif)

![](https://oxism.com/thing-translator/img/1.jpg)

## ![](https://oxism.com/thing-translator/img/2.jpg)

El Traductor de Cosas es una aplicación web que le permite apuntar con su teléfono (o computadora portátil) a cosas que escuchar para decirlas en un idioma diferente. Fue desarrollado como parte de
Proyecto [AI Experiments] (https://aiexperiments.withgoogle.com/) de Google. Tú
puede probar la aplicación [aquí] (https://thing-translator.appspot.com/).

Detrás de escena Thing Translator está usando Google
[Cloud Vision] (https://cloud.google.com/vision/) y
API de [Translate] (https://cloud.google.com/translate/).


### DESAROLLO

Para comenzar tu perzonalización puedes ejecutar el server en el puerto `9966`esto hará un: 

```
$ npm run watch
$ npm start
```
Necesitarás agregar tu PROPIA AKI KEY creada gratuitamente para tu cuenta de Gmail.
Configurandola en  `src/config.js`.

Para optimizar la salida de producción ejecutá:
```
$ npm run build
```

para builds de producción, reemplaza por tu archivo de `api_key`  con tu clave de producción.

#Lista de Idiomas de salida de Audio:
##   english: /en(-|_)gb/i,
##   spanish: /es(-|_)(mx|es)/i,
##    german: /de(-|_)de/i,
##    french: /fr(-|_)fr/i,
##    chinese: /zh(-|_)cn/i,
##    italian: /it(-|_)it/i,
##    korean: /ko(-|_)kr/i,
##    japanese: /ja(-|_)jp/i,
##    dutch: /nl(-|_)nl/i,
##    hindi: /hi(-|_)in/i
=======
Si quieres crear un nuevo fork para comenzar desde aqui tu propio proyecto tambien lo puedes hacer.
API keys on [Google Cloud Platform](https://cloud.google.com/).
Ya está en Versión ESPAÑOL
=======

### Desarrollo

Para iniciar un servidor de desarrollo en `9966` que observará los cambios de código, simplemente ejecute:
''
$ npm ejecutar dev
''

Para optimizar la salida para la ejecución de producción:
''
Paquete de ejecución de $ npm
''

Si desea crear una bifurcación o un proyecto similar, deberá configurar algunos
Claves de API en [Google Cloud Platform] (https://cloud.google.com/).
>>>>>>> e1d5192cdef2cbc3023fabc9d56cd363cad34d31
