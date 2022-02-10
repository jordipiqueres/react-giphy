import {useContext, useEffect, useState} from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

// nota: un hook puede utilizar otro hook
export function useGifs( {keyword} = {keyword: null} ) {

  const [loading, seLoading] = useState(false)
  // const [gifs , setGifs] = useState([]) // estado local
  const {gifs , setGifs} = useContext(GifsContext)
  // hook que se ejecuta una vez al renderizar y según la dependencia (keyword)
  useEffect(() => {
    console.log('efecto ejecutado')
    seLoading(true) // cargando

    // recuperamos la keyword del localstorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
    
    getGifs({ keyword: keywordToUse })
    .then(gifs => {
      seLoading(false) // cargado

      // guardamos la keyword en el localstorage
      localStorage.setItem('lastKeyword', keyword)
      return setGifs(gifs)
    })
    
  }, [keyword])

  // los custom hooks son objetos y no siempre son arrays (solo para el useState)
  return {loading, gifs}
}