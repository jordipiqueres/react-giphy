import React from "react";


// si un componente o un objeto no tienen acceso al proveedor
// por defecto se accede al contexto estático
const StaticContext = React.createContext({
  name: 'midudev',
  suscribeteAlCanal: true
})
export default StaticContext