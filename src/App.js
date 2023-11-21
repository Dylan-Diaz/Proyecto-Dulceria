import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Catalogo from './paginas/auth/catalogo';
import Login from './paginas/auth/login';
import Registro from './paginas/auth/registroUsuarios';
import RegistroE from './paginas/auth/registroVendedores';
import Vendedor from './paginas/auth/interfazVendedor';
import RegistrarP from './paginas/auth/registrarProducto';

function App() {
  return (
   <Fragment>
      <Router>
          <Routes>
              <Route path="/" element={<Catalogo/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/register" element={<Registro/>}></Route>
              <Route path="/registerE" element={<RegistroE/>}></Route>
              <Route path="/InterVende" element={<Vendedor/>}></Route>
              <Route path="/registrarP" element={<RegistrarP/>}></Route>
          </Routes>
      </Router>
   </Fragment>
  );
}

export default App