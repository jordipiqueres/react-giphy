import React, {useState} from "react"
import { Link, useLocation } from "wouter"
import { useGifs } from "../../hooks/useGifs"
import ListOfGifs from "../../components/ListOfGifs"
import Contador from "../../components/Contador"
import BotonContador1 from "../../components/BotonContador1"
import BotonContador2 from "../../components/BotonContador2"

const POPUPLAR_GIFS = ["Matrix", "Barcelona", "Mapache", "Panda"]

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  const {loading, gifs} = useGifs()

  // premisa: no llenar el render de funciones en línea
  const handleSubmit = evt => {
    // normalmente 
    evt.preventDefault() // para evitar el refresco de la página
    // navegar a otra ruta
    pushLocation(`/search/${keyword}`)
    console.log(keyword)
  }

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }

  return (
    <>
    <Contador nombre={'test'} valor={'testvalor'}></Contador>
    <BotonContador1></BotonContador1>
    <BotonContador2></BotonContador2>
    <form onSubmit={handleSubmit}>
      <input placeholder='Search a gif here...' onChange={handleChange} type="text" value={keyword}></input>
      <button>Buscar</button>
    </form>
    <h3 className="App-title">Última búsqueda</h3>
    <ListOfGifs gifs={gifs}></ListOfGifs>
    <h3 className="App-title">Los gifs más popuplares</h3>
    <ul>
      {POPUPLAR_GIFS.map((popuplarGif) => {
        return (
        <li key={popuplarGif}>
          <Link to={`/search/${popuplarGif}`}>Gifs de {popuplarGif}</Link>
        </li>
        )
      })}
    </ul>
    </>
  )
}