import logo from './logo.svg';
import './App.css';
import Componente, { ComponenteConst, ComponenteFunction } from './components/components';
import Propiedades from './components/props';
import Estado from './components/estado';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
        <Componente msg="Componente h2 prop"/>
        <ComponenteFunction msg="Componente Funcional"/>
        <ComponenteConst msg = "coomponente expresado en un Const"/>
        <hr/>
        <Propiedades 
        candena= 'cadena de texto' 
        numero = {12} 
        boolean = {true}
        arreglo = {[1,2,3,4]}
        objeto = {{nombre:"asd", correo:"asdasd@gmail.com"}}
        function={(num) => num * num}
        elementoReact= {<i>esto es un elemento React</i>}
        componenteReact = {
          <Componente msg = "Soy un componente pasado como prop" />
        }
        />
        <br/>
        <Estado/>
      </header>
    </div>
  );
}

export default App;
