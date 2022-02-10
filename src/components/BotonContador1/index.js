import React, {useContext} from "react";
import './botoncontador.css'
import ContadorContext from '../../context/ContadorContext'

export default function BotonContador1() {
  const {contador , setContador} = useContext(ContadorContext)

  const handleIncrementar = () => {
    const actualizado = contador+1
    setContador(actualizado)
  }
  console.log('incrementar', contador)
  return (
    <button onClick={handleIncrementar}>incrementar</button>
  )
}