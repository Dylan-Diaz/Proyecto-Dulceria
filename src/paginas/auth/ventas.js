import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Ventas = ({ userName }) => {
    const navigate = useNavigate();
    const nameE = localStorage.getItem('nombreEmpresa');
    const imgE = localStorage.getItem('logoEmpresa');
    const [productos, setProductos] = useState([]);

    const handleLogout = () => {
        // Limpiar localStorage al cerrar sesión
        localStorage.removeItem('nombreEmpresa');
        localStorage.removeItem('logoEmpresa')
        // Redirigir a la página de inicio de sesión
        // Puedes usar useHistory() o Link para redirigir según tu configuración de enrutamiento
        navigate('/')
    };

    useEffect(() => {
        const traerProducts = async () => {
            try {
                const res = await axios.get(`http://localhost:8888/api/v1/devcamps/ventas/traer/${nameE}`)
                setProductos(res.data.products);
            } catch (error) {
                console.error("Error al traer las Ventas:", error);
            }
        };

        traerProducts();
    }, []);


    return (
        <div className='interfazVendedor'>
            <nav>
                <div className='nav'>
                    <div className='tituloNav'>
                        <b>MiDulceOnline</b>
                    </div>
                    <div className="iconoPerfil">
                        <h5 className='nombreE'>{nameE}</h5>
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
                        <p><b>{nameE}</b></p>
                    </div>
                    <nav>
                        <Link to={'/InterVende'}><b>Mis Productos</b></Link>
                        <Link className='activo' to={'/ventas'}><b>Ventas</b></Link>
                        <Link to={'/registrarP'}><b>Registrar Producto</b></Link>
                        <button onClick={handleLogout}><b>Cerrar Sesion</b></button>
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
                {productos.map((producto) => (
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
                            <td>{producto.nombre}</td>
                            <td>{producto.apellido}</td>
                            <td>{producto.apellido}</td>
                            <td>{producto.tipoDocumento}</td>
                            <td>{producto.numeroDocumento}</td>
                            <td>{producto.correo}</td>
                            <td>{producto.telefono}</td>
                            <td>{producto.producto}</td>
                            <td>{producto.numeroUnidades}</td>
                            <td>{producto.metodoPago}</td>
                            <td>{producto.nombreProducto}</td>
                        </tr>
                    </tbody>
                </table>
                ))}
            </div>

        </div>
    );
}

export default Ventas;