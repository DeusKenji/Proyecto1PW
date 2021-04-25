import React from "react";
import './components/css/Header.css';
import Propietarios from './components/Propietarios.js';

class App extends React.Component{
  render(){
    return(
      <div>
        <div className='contenedor'>
          <h1 className='tittle'>Clinica Veterinaria</h1>
          <ul className="nav nav-pills barraNav">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="pill" href="#Inicio"><strong>Inicio</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="pill" href="#Propietarios"><strong>Propietarios</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="pill" href="#Mascotas"><strong>Mascotas</strong></a>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div className="tab-pane active" id="Inicio">
            Aun no tiene nada
          </div>
          <div className="tab-pane fade" id="Propietarios">
            <Propietarios/>
          </div>
          <div className="tab-pane fade" id="Mascotas">
              
          </div>
        </div>
      </div>
    )
  }
}

export default App;
