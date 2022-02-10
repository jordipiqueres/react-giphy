import './App.css';
import { useEffect, useState } from 'react';
import { Link, Route } from 'wouter';
import Detail from './pages/Detail';
import Home from './pages/Home'
import SearchResults from './pages/SearchResults';
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';
import { ContadorContextProvider } from './context/ContadorContext';

// el contexto tiene un consumidor y un proveedor

function App() {
  return (
    // normalmente se le pasa un objeto al value del contexto
    // cuando hay dos referencias distintas a un mismo contexto da problemas, ojo!
    <StaticContext.Provider value={{name: 'midudev', suscribeteAlCanal: true}}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <img className='App-logo' alt='Giffy logo' src='/logo.png'></img>
          </Link>
          <GifsContextProvider>
            <ContadorContextProvider>
          <Route
            component={Home}
            path="/"
          ></Route>
          </ContadorContextProvider>
            <Route
              component={SearchResults}
              path="/search/:keyword"
            ></Route>
            <Route
              component={Detail}
              path="/gif/:id"
            ></Route>
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
