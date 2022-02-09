import React, { useEffect, useState } from "react";
import getGifs from "../../services/getGifs";
import Gif from "../Gif";
import './styles.css'

export default function LisOfGifs ({params}) {
  const { keyword } = params
  const [loading, seLoading] = useState(false)
  const [gifs , setGifs] = useState([])

  useEffect(() => {
    console.log('efecto ejecutado')
    seLoading(true) // cargando
    getGifs({ keyword: keyword })
    .then(gifs => {
      seLoading(false) // cargado
      return setGifs(gifs)
    })
    
  }, [keyword])

  if (loading) {
    return <i>cargado</i>
  }

  return (<div>
    {
      gifs.map((singleGif, index) => {
      const {id, title, url} = singleGif
      return (
      <Gif 
        key={id} 
        title={title} 
        url={url} 
        id={id}>
      </Gif>
      )
    })
  }
  </div>)
}