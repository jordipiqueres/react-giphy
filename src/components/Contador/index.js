import React, {useContext} from "react";
import './contador.css'
import ContadorContext from '../../context/ContadorContext'

const pordefecto = {nombre: 'inicio', valor: '0'}

export default function Contador({nombre = 'aaaa', valor = 'bbbb'}) {
  const {contador , setContador} = useContext(ContadorContext)
  return (
    <div className="contador">
        <small>nombre: {nombre}</small>
        <small>valor: {contador}</small>
    </div>
  )
}