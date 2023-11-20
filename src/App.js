import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Catalogo from './paginas/auth/catalogo';
import Login from './paginas/auth/login';
import Registro from './paginas/auth/registroUsuarios';
import RegistroC from './paginas/auth/registroClientes';
import RegistroE from './paginas/auth/registroVendedores';
import Vendedor from './paginas/auth/interfazVendedor';

function App() {
  return (
   <Fragment>
      <Router>
          <Routes>
              <Route path="/" element={<Catalogo/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/register" element={<Registro/>}></Route>
              <Route path="/registerC" element={<RegistroC/>}></Route>
              <Route path="/registerE" element={<RegistroE/>}></Route>
              <Route path="/InterVende" element={<Vendedor/>}></Route>
          </Routes>
      </Router>
   </Fragment>
  );
}

export default App