import React, {useState} from "react"
import { Link, useLocation } from "wouter"

const POPUPLAR_GIFS = ["Matrix", "Barcelona", "Mapache", "Panda"]

export default function Home() {
  const [keyword, setKeyword] = useState('')

  const [path, pushLocation] = useLocation()


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
    <form onSubmit={handleSubmit}>
      <input placeholder='Search a gif here...' onChange={handleChange} type="text" value={keyword}></input>
      <button>Buscar</button>
    </form>
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