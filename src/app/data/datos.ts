export type data ={
  id:number;
  nombre:string;
  imagen:string;
  texto:string;
  bg?:string;
}

export const datos= [
  {
    id: 0,
    nombre: "Adobe Pemier Pro",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/1200px-Adobe_Premiere_Pro_CC_icon.svg.png",
    texto:"Adobe Premiere Pro es una aplicación de software de edición de vídeo no lineal y basada en una línea de tiempo desarrollada por Adobe Inc. y publicada como parte del programa de licencias Adobe Creative Cloud.",

  },

  {
    id: 1,
    nombre: "Adobe After Effects ",
    imagen:  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/250px-Adobe_After_Effects_CC_icon.svg.png',
    texto:"Adobe After Effects es una aplicación de composición, gráficos en movimiento y efectos visuales digitales desarrollada por Adobe Inc.; se utiliza en el proceso de postproducción de películas, videojuegos y producción de televisión",
  },
  {
    id: 2,
    nombre: "Adobe Illustrator ",
    imagen:  '../../../assets/img/ilustrador.png',
    texto:"Adobe Illustrator es un editor de gráficos vectoriales y un programa de diseño desarrollado y comercializado por Adobe Inc. Diseñado originalmente para Apple Macintosh, el desarrollo de Adobe Illustrator comenzó en 1985. Junto con Creative Cloud, se lanzó Illustrator CC.",
  },
  {
    id: 3,
    nombre: "Adobe Photoshop ",
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/120px-Adobe_Photoshop_CC_icon.svg.png',
    texto:"Adobe Photoshop es un programa informático de edición de imagen desarrollado por la empresa Adobe Systems para dispositivos Windows y Mac Os.Lanzada por primera vez en el año 1990 para MacOs y para Windows en 1992, la herramienta estrella de Adobe ha ido incorporando mejoras con el paso de los años hasta convertirse es la herramienta más completa de retoque fotográfico."
  },
  {
    id: 4,
    nombre: "Adobe Creative Cloud",
    imagen:  'https://upload.wikimedia.org/wikipedia/commons/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg',
    texto:"Adobe Creative Cloud es un conjunto de aplicaciones y servicios de Adobe Inc. que brinda a los suscriptores acceso a una colección de software utilizado para diseño gráfico, edición de video, desarrollo web, fotografía, junto con un conjunto de aplicaciones móviles y también algunos servicios opcionales en la nube"
  }
  ]
