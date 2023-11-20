import React from 'react';
import { Link } from 'react-router-dom';

const Vendedor = () => {
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
                        <Link className='activo'><b>Mis Productos</b></Link>
                        <Link><b>Ventas</b></Link>
                        <Link><b>Registrar Producto</b></Link>
                        <Link><b>Cerrar Sesion</b></Link>
                    </nav>
                    <label for='btn-menu'>×</label>
                </div>
            </div>

            <div className='buscarV'>
                <div className='catalogo'>
                    <h3><b>Mis Productos</b></h3>
                </div>
                <div>
                    <select className='buscarSelect' name='buscar'>
                        <option value='categoria'>Categoria</option>
                        <option value='region'>Region</option>
                        <option value='precios'>Precios</option>
                    </select>
                    <input type='text' className='buscarInput' name='search' placeholder='Buscar' required></input>
                    <button className='buscarBotonV'>Buscar</button>
                </div>
            </div>

            <div className='contenedorCards'>
                <div className="containerCards">
                    <div className="producto">
                        <img src='/img/Ramo.png' className='imgVendedor' width={50}></img>
                        <div className='img'>
                            <img src='/img/achiras.jpg' width={230} height={270}></img>
                        </div>
                        <div className='cardBody'>
                            <p className='tituloCard'>Paquete de achiras el gran tolima 50gr</p>
                            <p className='precio'><b>$ 2.000</b></p>
                            <div className='form-group col-sm-12'>
                                <div className='row'>
                                    <div className='col-sm-7'>
                                        <p>Ramo</p>
                                    </div>
                                    <div className='col-sm-5'>
                                        <Link className='verMas' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Ver mas</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="producto">
                        <img src='/img/Ramo.png' className='imgVendedor' width={50}></img>
                        <div className='img'>
                            <img src='/img/achiras.jpg' width={230} height={270}></img>
                        </div>
                        <div className='cardBody'>
                            <p className='tituloCard'>Paquete de achiras el gran tolima 50gr</p>
                            <p className='precio'><b>$ 2.000</b></p>
                            <div className='form-group col-sm-12'>
                                <div className='row'>
                                    <div className='col-sm-7'>
                                        <p>Ramo</p>
                                    </div>
                                    <div className='col-sm-5'>
                                        <Link className='verMas' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Ver mas</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="producto">
                        <img src='/img/logo_fondo.png' className='imgVendedor' width={50}></img>
                        <div className='img'>
                            <img src="/img/bocadillo.jpg" width={230} height={270} />
                        </div>
                        <div className='cardBody'>
                            <p className='tituloCard'>Bocadillo veleño por 12 unidades</p>
                            <p className='precio'><b>$ 1.500</b></p>
                            <div className='form-group col-sm-12'>
                                <div className='row'>
                                    <div className='col-sm-7'>
                                        <p>Mis dulces Artesanales</p>
                                    </div>
                                    <div className='col-sm-5'>
                                        <Link className='verMas' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Ver mas</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="producto">
                        <img src='/img/logo_fondo.png' className='imgVendedor' width={50}></img>
                        <div className='img'>
                            <img src="/img/bocadillo.jpg" width={230} height={270} />
                        </div>
                        <div className='cardBody'>
                            <p className='tituloCard'>Bocadillo veleño por 12 unidades</p>
                            <p className='precio'><b>$ 1.500</b></p>
                            <div className='form-group col-sm-12'>
                                <div className='row'>
                                    <div className='col-sm-7'>
                                        <p>Mis dulces Artesanales</p>
                                    </div>
                                    <div className='col-sm-5'>
                                        <Link className='verMas' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Ver mas</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vendedor;