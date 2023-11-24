import React from 'react';
import { Link } from 'react-router-dom';

const Ventas = () => {
    return (
        <div className='interfazVendedor'>
            <nav>
                <div className='nav'>
                    <div className='tituloNav'>
                        <b>MiDulceOnline</b>
                    </div>
                    <div className="iconoPerfil">
                        <h5 className='nombreE'>Nombre Empresa</h5>
                        <label className='botonPerfil' for='btn-menu'><img src='/img/avatar.png' className='imgPerfil' width={50}></img></label>
                    </div>
                </div>
                <div className='red'></div>
                <div className='icono'>
                    <img src="/img/icono.png" className='tamañoImg' alt="Icono" />
                </div>
            </nav>
            <input type='checkbox' id='btn-menu'></input>
            <div className='container-menu'>
                <div className='cont-menu'>
                    <div className='cabezeraDesple'>
                        <img src='/img/avatar.png' className='imgDesple'></img>
                        <p><b>Nombre Empresa</b></p>
                    </div>
                    <nav>
                        <Link to={'/InterVende'}><b>Mis Productos</b></Link>
                        <Link className='activo' to={'/ventas'}><b>Ventas</b></Link>
                        <Link to={'/registrarP'}><b>Registrar Producto</b></Link>
                        <Link><b>Cerrar Sesion</b></Link>
                    </nav>
                    <label for='btn-menu'>×</label>
                </div>
            </div>

            <div className='buscarV'>
                <div className='catalogo'>
                    <h3><b>Mis Ventas</b></h3>
                </div>
                <div>
                    <select className='buscarSelect' name='buscar'>
                        <option value='categoria'>Fecha</option>
                        <option value='region'>Hora</option>
                        <option value='precios'>Producto</option>
                    </select>
                    <input type='text' className='buscarInput' name='search' placeholder='Buscar' required></input>
                    <button className='buscarBotonV'>Buscar</button>
                </div>
            </div>


            <div className='containerV'>
                <table class="table table-striped tablaV">
                    <thead className='table-dark'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Tipo de Documento</th>
                            <th scope="col">Numero de Documento</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Unidades</th>
                            <th scope="col">Metodo de Pago</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Ventas;