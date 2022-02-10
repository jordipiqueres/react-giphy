import React, {useState} from "react";


// si un componente o un objeto no tienen acceso al proveedor
// por defecto se accede al contexto estático
const Context = React.createContext({})
// el consumidor es el mismo
// el provider es envolver al provider con un valor custom
export function GifsContextProvider({children}) {
  const [gifs, setGifs] = useState([])
  return <Context.Provider value={{gifs, setGifs}}>
    {children}
  </Context.Provider>
}

export default Context