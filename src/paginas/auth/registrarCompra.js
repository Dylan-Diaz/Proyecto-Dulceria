import React from 'react';
import { Link } from 'react-router-dom';

const Compra = () => {
    return (
        <div>
            <nav>
                <div className='nav_register'>
                    <div className='tituloNavR'>
                        <div className='icono_register'>
                            <img src="/img/icono.png" width={40} alt="Icono" />
                        </div>
                        <b>MiDulceOnline</b>
                    </div>
                    <div className='bodyNavR'>
                    </div>
                </div>
            </nav>

            <div className='BodyCompra'>
                <div className='descripcionP'>
                    <p>Paquete de achiras<u> El Gran tolima 50gr</u></p>
                </div>
                <div className='box_compra'>
                    <div className='imgCompra'>
                        <img src='/img/achiras.jpg' width={390}></img>
                    </div>
                    <div className='contenidoC'>
                        <div className='logoC'>
                            <img src='/img/Ramo.png' className='imgV' width={89}></img>
                        </div>
                        <div className='nombreVende'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-tags etiqueta" viewBox="0 0 16 16">
                                <path d="M3 2v4.586l7 7L14.586 9l-7-7zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586z" />
                                <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1z" />
                            </svg>
                            <p><b>Vendedor:</b> Ramo</p>
                        </div>
                        <p className='descriP'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ex similique quod, libero, ea iste excepturi earum omnis, vel autem officiis sapiente.
                        </p>
                        <div className='precioC'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-currency-dollar dolar" viewBox="0 0 16 16">
                                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                            </svg>
                            <p><b>2.000 COP</b></p>
                        </div>
                        <div className='envio'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-truck camion" viewBox="0 0 16 16">
                                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                            </svg>
                            <p><b>Envio: </b><u>Gratis</u></p>
                        </div>
                        <div className='botonesCompra'>
                            <div class="d-grid gap-2 col-6 ">
                                <input type='submit' className='btn btn-success letraCompra' value={'Comprar'} data-bs-toggle="modal" data-bs-target="#exampleModal"></input>
                            </div>
                            <Link className='atrasCompra' to={"/"}>| Atras</Link>
                        </div>
                    </div>
                </div>
            </div>


            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel"><p className='textoC'><b>Comprar Producto</b></p></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className='registrarCompra'>
                                <p className='textoC'><b>Te pediremos algunos datos antes de validar tu compra</b></p>
                                <div className='form-group col-sm-12'>
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <div className="form-floating mb-3">
                                                <input type="text" value={''} name='nombreEmpresa' className="form-control" id="floatingInput" placeholder="name@example.com" required />
                                                <label htmlFor="floatingInput">Nombre</label>
                                            </div>
                                        </div>
                                        <div className='col-sm-6'>
                                            <div className="form-floating mb-3">
                                                <input type="text" value={''} name='nombreEmpresa' className="form-control" id="floatingInput" placeholder="name@example.com" required />
                                                <label htmlFor="floatingInput">Apellido</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <div class="input-group mb-3">
                                                <label class="input-group-text" for="inputGroupSelect01"><i class="bi bi-person-vcard"></i></label>
                                                <select class="form-select" id="inputGroupSelect01">
                                                    <option selected>Tipo de documento</option>
                                                    <option value="cc">Cedula de ciudadania</option>
                                                    <option value="ce">Cedula de extrangeria</option>
                                                    <option value="pa">Pasaporte</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-sm-6'>
                                            <div className="form-floating mb-3">
                                                <input type="number" value={''} name='nombreEmpresa' className="form-control" id="floatingInput" placeholder="name@example.com" required />
                                                <label htmlFor="floatingInput">Numero de documento</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <div className="form-floating mb-3">
                                                <input type="email" value={''} name='nombreEmpresa' className="form-control" id="floatingInput" placeholder="name@example.com" required />
                                                <label htmlFor="floatingInput">Correo</label>
                                            </div>
                                        </div>
                                        <div className='col-sm-6'>
                                            <div className="form-floating mb-3">
                                                <input type="number" value={''} name='nombreEmpresa' className="form-control" id="floatingInput" placeholder="name@example.com" required />
                                                <label htmlFor="floatingInput">Telefono</label>
                                            </div>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <p className='textoC'><b>Detalles del pedido</b></p>
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <div className="form-floating mb-3">
                                                <input type="number" value={''} name='nombreEmpresa' className="form-control" id="floatingInput" placeholder="name@example.com" required />
                                                <label htmlFor="floatingInput">Numero de Unidades</label>
                                            </div>
                                        </div>
                                        <div className='col-sm-6'>
                                            <div class="input-group mb-3">
                                                <label class="input-group-text" for="inputGroupSelect01"><i class="bi bi-currency-dollar"></i></label>
                                                <select class="form-select" id="inputGroupSelect01">
                                                    <option selected>Metodo de pago</option>
                                                    <option value="cc">Efectivo</option>
                                                    <option value="ce">Targeta</option>
                                                    <option value="pa">Billetera digital</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='TamInte'>
                <p><b>Tambien te puede interesar</b></p>
            </div>

            <hr></hr>


            <div className='carruselProductos'>
                <ul className="carrusel">
                    <li>
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
                                            <Link className='verMas'>Ver mas</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
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
                                            <Link className='verMas'>Ver mas</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
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
                                            <Link className='verMas'>Ver mas</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="producto" >
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
                                            <Link className='verMas'>Ver mas</Link>
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
                                            <Link className='verMas'>Ver mas</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className='flechasCarrusel'>
                    <button className='botonCarrusel'><i class="bi bi-caret-left-fill"></i></button>
                    <button className='botonCarrusel'><i class="bi bi-caret-right-fill"></i></button>
                </div>
                
            </div>
            <hr></hr>

        </div>
    );
}

export default Compra;