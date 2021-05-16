# AnimeFenix API Rest - [1.0.0]

API Rest basada en el concepto WebScraping para extraer informacion de la pagina [AnimeFenix.com](https://animefenix.com) en un formato JSON.


| Endpoints | 
-----

> Method: **GET** \
> Route: **/**

| *Return* | _Object_    | *Status* | [200]() |
|----------|------------|----------|---------|

```json
{
  "populars": [
    {
      "id": "boku-no-hero-academia-5th-season",
      "title": "Boku no Hero Academia 5th Season",
      "cover": "https://www.animefenix.com/cdn/animes/cover/605a5ef01e4b7/boku-no-hero-academia-5th-season.jpg",
      "type": "TV",
      "status": "Emisión",
      "date": 2021
    },
    ...
    // Max items: 13 objects probably
  ],
  "episodes": 
  [
    
    {
      "id": "kingdom-3rd-season-7",
      "title": "Kingdom 3rd Season",
      "number": 7,
      "cover": "https://www.animefenix.com/cdn/animes/screenshot/5e89127b52dd2/kingdom-3rd-season.jpg"
    },
    ...
    // Max items: 36 objects probably
  ],
  "recents": 
  [
    
    {
      "id": "kimetsu-no-yaiba-mugen-ressha-hen",
      "title": "Kimetsu no Yaiba: Mugen Ressha-hen",
      "cover": "https://www.animefenix.com/cdn/animes/cover/608889f1cd08f/kimetsu-no-yaiba-mugen-ressha-hen.jpg",
      "type": "Película",
      "status": "Finalizado",
      "date": 2021
    },
    ...
    // Max items: 15 Objects probably
  ]
}
```
~~~
Es probable que esta seccion sea dividida en 3 partes ya que el objeto es demaciado grande para una peticion simple
~~~


> Method: **GET** \
> **/emision?p=1**  [_total pages = 3_]

| *Return* | _Object_    | *Status* | [200]() |
|----------|-------------|----------|---------|


```json

{
  "animes": 
  [
    
    {
      "id": "mini-dragon",
      "title": "Mini Dragon",
      "sinopsis": "Mini-anime de Kobayashi-san Chi sin Maid Dragón S.",
      "cover": "https://www.animefenix.com/cdn/animes/cover/606e57612f875/mini-dragon.jpg",
      "type": "Especial",
      "status": "Emisión",
      "date": 2021
    }
    ...
    // Max items: 25 Objects probably
  ],
  "pages": 3
}
```

> Method: **GET** \
> **/animes?p=1**  [_total pages = undefined_]

| *Return* | _Object_    | *Status* | [200]() |
|----------|-------------|----------|---------|


```json
{
  "animes": 
  [
    
    {
      "id": "kimetsu-no-yaiba-mugen-ressha-hen",
      "title": "Kimetsu no Yaiba: Mugen Ressha-hen",
      "sinopsis": "Cayendo para siempre en un sueño sin fin...\n\nTanjiro y el grupo han completado su entrenamiento de rehabilitación en la Mansión de las Mariposas y llegan a su próxima misión en el Tren Mugen, donde más de 40 personas han desaparecido en muy poco tiempo.\n\nTanjiro y Nezuko, junto con Zenitsu e Inosuke, se unen a uno de los espadachines más poderosos dentro del Demon Slayer Corps, Flame Hashira Kyojuro Rengoku, para enfrentar al demonio a bordo del Mugen Train en camino a la desesperación.",
      "cover": "https://www.animefenix.com/cdn/animes/cover/608889f1cd08f/kimetsu-no-yaiba-mugen-ressha-hen.jpg",
      "type": "Película",
      "status": "Finalizado",
      "date": 2021
    },
    ...
    // max items: 25 items probably
  ],
  "pages": 41
}
```

> Method: **GET** \
> **/anime/:id**

| *Return* | _Object_    | *Status* | [200]() |
|----------|-------------|----------|---------|


```json

{
  "id": "ijiranaide-nagatoro-san",
  "title": "Ijiranaide, Nagatoro-san",
  "cover": "https://www.animefenix.com/cdn/animes/cover/605fbe803c5f4/ijiranaide-nagatoro-san.jpg",
  "sinopsis": "¡Nagatoro es una estudiante de primer año en la escuela secundaria a la que le encanta molestar y torturar a su compañero de clase mayor! ¿Cuál es su motivación y por qué Senpai la aguanta? ¿Nagatoro solo quiere crear miseria para Senpai? ¿O tal vez le gusta en secreto?",
  "type": "TV",
  "status": "Emisión",
  "no_episodes": 6,
  "views": 405066,
  "next_episode": "Sábado 22 de mayo 2021",
  "genders": 
  [
    
    {
      "id": "comedia",
      "title": "Comedia"
    },
    
    {
      "id": "escolares",
      "title": "Escolares"
    },
    
    {
      "id": "romance",
      "title": "Romance"
    }
  ],
  "episodes": 
  [
    
    {
      "id": "ijiranaide-nagatoro-san-6",
      "number": 6
    },
    
    {
      "id": "ijiranaide-nagatoro-san-5",
      "number": 5
    },
    
    {
      "id": "ijiranaide-nagatoro-san-4",
      "number": 4
    },
    
    {
      "id": "ijiranaide-nagatoro-san-3",
      "number": 3
    },
    
    {
      "id": "ijiranaide-nagatoro-san-2",
      "number": 2
    },
    
    {
      "id": "ijiranaide-nagatoro-san-1",
      "number": 1
    }
  ]
}
```

> Method: **GET** \
> **/ver/:id**

| *Return* | _Object_    | *Status* | [200]() |
|----------|-------------|----------|---------|


```json

{
  "anime_id": "ijiranaide-nagatoro-san",
  "title": "Ijiranaide, Nagatoro-san 6 Sub Español",
  "no_ep": 6,
  "ctrls": 
  {
    "prev": true,
    "next": false
  },
  "servers": 
  [
    {
      "url": "https://mega.nz/embed/MKBRSKoT#yLsnzvcX9pEXBul_LTWzzqiTexp2fNdJMI3LVlV5tM4",
      "name": "Mega"
    },
    {
      "url": "https://www.yourupload.com/embed/V60SYlQ0KTV6",
      "name": "Yourupload"
    },
    {
      "url": "https://www.burstcloud.co/embed/b377c9f829444b227823d8f44ad72e198a1588c747a5c48960cec6defcb04192/Nagatoro%206.mp4",
      "name": "Burstcloud"
    },
    {
      "url": "https://ok.ru/videoembed/2375665846825",
      "name": "Ok"
    },
    {
      "url": "https://stream/amz.php?v=d",
      "name": "Stream"
    },
    {
      "url": "https://stream/amz.php?v=vNWQEPbczADugYmiPDQuSO5aAY0UoBFMn8TdXGwvxTe&ext=es",
      "name": "Stream"
    }, 
    {
      "url": "https://www.fembed.com/v/65r51t044-zp403",
      "name": "Fembed"
    },
    {
      "url": "https://www.mp4upload.com/embed-2y01i6pigudb.html",
      "name": "Mp4upload"
    },
    {
      "url": "https://sendvid.com/embed/9gsee4ua",
      "name": "Sendvid"
    }
  ]
}
```

> Method: **GET** \
> **/**

| *Return* | _Array_    | *Status* | [200]() |
|----------|------------|----------|---------|

```json
[
  
  {
    "id": "boku-no-hero-academia-5th-season",
    "title": "Boku no Hero Academia 5th Season",
    "sinopsis": "Quinta temporada de Naruto Verde.",
    "cover": "https://www.animefenix.com/cdn/animes/cover/605a5ef01e4b7/boku-no-hero-academia-5th-season.jpg",
    "type": "TV",
    "status": "Emisión",
    "date": 2021
  },
  ...
  // undefine results
]
```



> Autor **Carlos Burelo**