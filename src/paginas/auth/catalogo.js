import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Catalogo = () => {
    const [productos, setProductos] = useState([]);
    const [busqueda, setBusqueda]= useState("");
    const [BuscarProducts, setBuscarProducts]= useState([]);

    useEffect(() => {
        const traerProducts = async () => {
            try {
                const res = await axios.get("http://localhost:8888/api/v1/devcamps/productos")
                setProductos(res.data.results);
                setBuscarProducts(res.data.results);
            } catch (error) {
                console.error("Error al traer los productos:", error);
            }
        };

        traerProducts();
    }, []);


    const filtrar=(Busqueda)=>{
        var resultadoBusqueda=BuscarProducts.filter((elemento)=>{
          if(elemento.tipoProducto.toString().toLowerCase().includes(Busqueda.toLowerCase())
          || elemento.precio.toString().toLowerCase().includes(Busqueda.toLowerCase())
          || elemento.region.toString().toLowerCase().includes(Busqueda.toLowerCase())
          ){
            return elemento;
          }
        });
        setProductos(resultadoBusqueda);
      }
    
      const handleChange=e=>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);
      }

    return (
        <div>
            <nav>
                <div className='nav'>
                    <div className='tituloNav'>
                        <b>MiDulceOnline</b>
                    </div>
                    <button className="boton-desplegable">●●●</button>
                    <div className="bodyNav">
                        <Link className='navLink' to={"register"}>Regístrate</Link>
                        <Link className='boton' to={"Login"}><b>Iniciar sesión</b></Link>
                    </div>
                </div>
                <div className='yellow'></div>
                <div className='icono'>
                    <img src="/img/icono.png" className='tamañoImg' alt="Icono" />
                </div>
            </nav>



            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/img/carusel_1.jpg" class="d-block w-100" data-bs-interval="2000" />
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="/img/carusel_2.jpg" class="d-block w-100" data-bs-interval="2000" />
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="/img/carusel_3.jpg" class="d-block w-100" data-bs-interval="2000" />
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <hr></hr>


            {/*<div className='container'>
            <div className='info'>
                <div className='imagen'>
                    <img src='/img/imgInfo.jpg' width='400px'></img>
                </div>
                <div className='infoText'>
                    <h3>
                        Ofrece tus productos
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-circle bi_1" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                        </svg> 
                    </h3>   
                    <p>¿Tienes tu propio emprendimiento? Queremos apoyarte!!! Registrate con nosotros para poder ofrecer tus productos en nuestra tienda online.</p>
                    <br></br>
                    <Link to='register' className='botonBlue'>Registrate</Link>
                </div>
            </div>
        </div>*/}


            <div className='buscar'>
                <div className='catalogo'>
                    <h3><b>Catalogo</b></h3>
                </div>
                <div className='BotonesC'>
                    {/*<select className='buscarSelect' name='buscar'>
                        <option value='categoria'>Categoria</option>
                        <option value='region'>Region</option>
                        <option value='precios'>Precios</option>
                    </select>*/}
                    <input type='text' className='buscarInput' value={busqueda} name='search' placeholder='Buscar por tipo producto, precio y region' onChange={handleChange} required></input>
                    <button className='buscarBoton'>Buscar</button>
                </div>
            </div>

            <div className='contenedorCards'>
                <div className="containerCards">
                    {productos.map((producto, index) => (
                        <div className="producto">
                            <input type='hidden' key={index}></input>
                            <img src="/img/Ramo.png" className='imgVendedor' width={50}></img>
                            <><div className='img'>
                                <img src='/img/achiras.jpg' width={230} height={270}></img>
                            </div><div className='cardBody'>
                                    <p className='tituloCard'>{producto.tipoProducto} {producto.nombre} {producto.cantidadContenido}{producto.tipoContenido}</p>
                                    <p className='precio'><b>{producto.precio}</b></p>

                                    <div className='form-group col-sm-12'>
                                        <div className='row'>
                                            <div className='col-sm-7'>
                                                <p>{producto.nombreEmpresa}</p>
                                            </div>
                                            <div className='col-sm-5'>
                                                <Link to={`/compra/${producto._id}`} className='verMas'>Ver mas</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div></>
                        </div>
                    ))}


                    {/*<div className="producto">
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
                                        <Link to={'/compra'} className='verMas'>Ver mas</Link>
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
                                        <Link to={'/compra'} className='verMas'>Ver mas</Link>
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
                                        <Link to={'/compra'} className='verMas'>Ver mas</Link>
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
                        </div>*/}
                </div>
            </div>
        </div>
    );
}

export default Catalogo;