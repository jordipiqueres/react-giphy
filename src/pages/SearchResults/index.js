import React, {useEffect, useState} from 'react'
import Spinner from '../../components/Spinner'
import ListOfGifs from '../../components/ListOfGifs'
import getGifs from '../../services/getGifs'
import { useGifs } from '../../hooks/useGifs' 

function SearchResults ({ params }) {
  const { keyword } = params
  console.log(keyword)
  
  const {loading, gifs} = useGifs({ keyword })
  console.log({loading, gifs})
  /*
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

  */

  return <>
    { loading ?
      <Spinner></Spinner>
      : <ListOfGifs gifs={gifs}></ListOfGifs>
    }
  </>
}
export default React.memo(SearchResults)