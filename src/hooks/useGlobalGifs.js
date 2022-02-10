import React, {useContext} from "react";
import GifsContext from '../context/GifsContext'

export default function useGlobalGifs() {
  const {gifs, setGifs} = useContext(GifsContext)
  return gifs
}