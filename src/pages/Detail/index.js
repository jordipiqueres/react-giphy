import React, {useContext} from "react";
import StaticContext from "../../context/StaticContext";
import GifsContext from "../../context/GifsContext";
import Gif from "../../components/Gif";

export default function Detail ({params}) {
  const staticConfig = useContext(StaticContext)
  console.log(staticConfig)

  // interesante ver redux vs context
  // usos: i18n o colores de la aplicación por si se quieren cambiar
  // buenas prácticas: intentar evitar y justo lo necesario
  // el estado no se està guardando y si refrescamos lo vamos a perder
  // con un fallback se podría salvar
  const {gifs, setGifs} = useContext(GifsContext)
  console.log(gifs)
  const gif = gifs.find((singleGif) => {
    return singleGif.id === params.id
  })

  // <Gif title={gif.title} id={gif.title} url={gif.url}></Gif> // es lo mismo que el de abajo!
  return (
    <> 
      <Gif {...gif}></Gif>
    </>
  )
}