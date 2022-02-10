import React, {useContext} from "react";
import './botoncontador.css'
import ContadorContext from '../../context/ContadorContext'

export default function BotonContador2() {
  const {contador , setContador} = useContext(ContadorContext)

  const handleDecrementar = () => {
    const actualizado = contador-1
    setContador(actualizado)
  }
  console.log('decrementar', contador)
  return (
    <button onClick={handleDecrementar}>decrementar</button>
  )
}