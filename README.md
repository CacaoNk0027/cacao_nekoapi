<div align="center">
  <p><a href="https://discord.gg/PKGhvUKaQN"><img src="https://media.discordapp.net/attachments/809089744574611507/855990674046582794/1624150826097.png?width=322&height=461" width="70" alt="cacao_nekoapi" /></a><a href="https://discord.gg/PKGhvUKaQN"><img src="https://nodei.co/npm/cacao_nekoapi.png?downloads=true&downloadRank=true&stars=true" alt="cacao_nekoapi" style="margin-bottom: 15px; margin-left: 15px;"></a></p>
  <img src="https://img.shields.io/npm/v/cacao_nekoapi.svg?maxAge=3600" alt="version">
  <img src="https://img.shields.io/npm/dt/cacao_nekoapi" alt="descargas">
  <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; font-size: 30px;"><b>cacao_nekoapi</b></p>
  <p style="padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">por: !  𝚂𝚌𝚑𝚎𝚛𝚣𝚘  🎶#0027</p>
</div>


hey que tal? 
cacao_nekoapi, es una biblioteca de imagenes tipo rolplay, anime, nsfw y etc de tematica anime para bots de discord,
el propocito es que ya no tengas que estar buscando imagenes en chrome y guardarlas en un array.. uhh que aburrido no?
pues ahora las imagenes estan aqui!! y las puedes usar en lo que sea

[servidor de discord](https://discord.gg/PKGhvUKaQN) || [bot](https://discord.com/api/oauth2/authorize?client_id=821452429409124451&permissions=8&scope=bot%20applications.commands) || [API REST](https://nekoapi.vanillank2006.repl.co/api)

## Instalacion

`npm install cacao_nekoapi`

## Ejemplos

```js
// ejemplo para obtener gifs con una funcion

/* Requerimos el paquete npm cacao_nekoapi */
const nekoapi = require('cacao_nekoapi');

/* creamos una funcion con el nombre que gustes pero que sea asincrona */
const myNekoFunction = async () => { 
  // nekoapi cuenta con dos clases principales

  /**
   * SFW
   * son todos aquellos gifs que no son contenido erotico o +18
   * ejemplos son => cat, kiss, girl, sing
   */
  let kissGifData = await nekoapi.SFW.action_1.kiss() // retorna gifs de besos
   /**
    * lo que se mostraria seria algo asi 
    * { url: "https://restnekoapi.herokuapp.com/kiss/example" }
    * la respuesta depende de lo que solicites, aveces pueden aparecer otros objetos
    * cabe aclarar que el link de arriba es un ejemplo por lo que la ruta no existe
   */
  console.log(kissGifData)
  
  /**
   * NSFW
   * son todos aquellos gifs o imagenes que son de contenido +18 o erotico
   * ejemplos son => uniform, f*ck, ahegao, oral
   */
  let nsfwFckData = await nekoapi.NSFW.nsfw.uniform() // retorna imagenes de chicas con uniforme (anime)
  /**
   * lo que se mostraria seria algo asi
   * { url: "https://restnekoapi.herokuapp.com/nsfw/ahegao" }
   * la respuesta depende de lo que solicites, aveces pueden aparecer mas objetos
   * cabe aclarar que el link de arriba es un ejemplo por lo que la ruta no existe 
   */
  console.log(nsfwFckData)

  /**
   * es necesario que todos los requerimientos siempre lleven un await antes para que no devuelva una promesa
   * Promise { <pending> } 
   */
}

myNekoFunction()
```

nota: es necesario que para obtener una url todo dentro de una función async ya que si no el valor url dara indefinido `Undefined`

## cacao_nekoapi

| nekoapi      |                                                       |
| ------------ | ----------------------------------------------------- |
| action       | muestra gifs de accion para interactuar con los demas |
| reaction     | oh mira! que es eso de ahi?  :0                       |
| anime        | ohayoo! onii-chan :3                                  |
| nsfw         | bueno...                                              |
| rolplay nsfw | BUENO...                                              |

## action / acción

| acción  |                                           |
| ------- | ----------------------------------------- |
| camp    | acampa con alguien                        |
| cook    | cocina algo delicioso                     |
| cuddle  | acurrucate con alguien n.n                |
| cure    | cura a un herido                          |
| draw    | dibuja algo                               |
| drive   | maneja hacia un lugar                     |
| eat     | come algo                                 |
| feed    | alimenta a alguien uwu                    |
| hug     | abraza a alguien n.n                      |
| kickbut | patea a alguien D:                        |
| kill    | no mates a nadie plis..                   |
| kiss    | u-un beso?                                |
| pat     | acaricia a alguien                        |
| peek    | espia discretamente                       |
| playing | juega algun videojuego                    |
| poke    | fastidia a alguien                        |
| punch   | por que golpear a alguien? D:             |
| run     | corre a alguien o huye!                   |
| sape    | dale un sape a alguien                    |
| shot    | no le dispares a nadie.. plis             |
| sip     | toma alguna bebida                        |
| slap    | dale una bofetada a alguien               |
| sleep   | duerme duerme uwu                         |
| spank   | menudo pervertido >.<                     |
| stare   | clava la mirada en alguien o.o            |
| tickle  | ataque de cosquillas!!                    |
| travel  | viaja a algun lugar                       |
| work    | trabajando duro? o durando el el trabajo? |

## reaction / reacción

| reacción |                                |
| -------- | ------------------------------ |
| angry    | te enojas por algo             |
| baka     | BAKAAA!! ¬¬"                   |
| blush    | te sonrojas >//<"              |
| bored    | estas aburrido                 |
| cry      | no llores :c                   |
| dance    | te pones a bailar n.n          |
| laugh    | rie fuerte X'D                 |
| like     | te gusta algo                  |
| nervous  | o-o" n-nervioso?               |
| pout     | te molestas y haces puchero    |
| sad      | te pones triste                |
| scream   | grita lo mas fuerte que puedas |
| smug     | presumes algo                  |
| teehee   | una pequeña risita             |
| think    | piensa en algo                 |
| vomit    | vomitas uhg                    |
| wink     | guiñas un ojo                  |
| yandere  | dejas ver tu modo yandere      |

## action 2 / acción 2  - de RestApi2

| action |                                      |
| ------ | ------------------------------------ |
| pat    | se tierno y acarica a alguien :3     |
| lick   | lame algo o a alguien ¬/./¬          |
| read   | lee un libro o algun texto           |
| write  | escribe un poema o una gran historia |

## reaction 2 / reacción 2  - de RestApi2

| action |                       |
| ------ | --------------------- |
| sing   | canta a todo pulmon!! |


## anime

| anime       |                      |
| ----------- | -------------------- |
| foxgirl     | una chica zorro      |
| girl        | chica de anime       |
| kemonomimi  | chica kemo           |
| maple       | la hermosa maple     |
| mbwallpaper | wallpaper para movil |
| neko        | neko girl nyaa!      |
| waifu       | waifu popular uwu    |
| wallpaper   | wallaper para pc     |

## animals / animales

| animals |                                            |
| ------- | ------------------------------------------ |
| cat     | imagenes de lindos gatos :3                |
| bear    | son grandes y abrazables, hablo de osos ^^ |

## nsfw

| nsfw    |                                   |
| ------- | --------------------------------- |
| ahegao  | imagen random de ahegao           |
| boobs   | u/./u r ~~                        |
| hentai  | creo que ya muchos lo conocen     |
| lwmaple | maple nooo D:                     |
| lwneko  | lewd neko girl                    |
| pussy   | u/./u r ~~                        |
| trap    | bueno.. cada quien sus gustos no? |
| uniform | uhh chicas con uniforme ~~        |
| yuri    | yuri 7u7                          |

## rolplay nsfw

|          |                              |
| -------- | ---------------------------- |
| anal     | usa la 3 boca 7/./7          |
| boobjob  | rusa a alguien               |
| cum      | cum cum!                     |
| fap      | vale chicos hay paja         |
| feetjob  | pies~                        |
| fuck     | un clasico ~                 |
| happyend | abre la boca >.<             |
| kuni     | ahi abajo esta sucio >~<     |
| spank    | lo mismo de action pero nsfw |
| suck     | suck suck ~~                 |