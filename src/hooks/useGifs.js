import {useEffect, useState} from 'react'
import getGifs from '../services/getGifs'

export function useGifs( {keyword} ) {

  const [loading, seLoading] = useState(false)
  const [gifs , setGifs] = useState([])

  // hook que se ejecuta una vez al renderizar y según la dependencia (keyword)
  useEffect(() => {
    console.log('efecto ejecutado')
    seLoading(true) // cargando
    getGifs({ keyword: keyword })
    .then(gifs => {
      seLoading(false) // cargado
      return setGifs(gifs)
    })
    
  }, [keyword])

  return {loading, gifs}
}