import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mostrarImagenSeleccionada } from '../../js/imagenRegistroE';
import axios from 'axios';

const RegistrarP = () => {
    const [producto, setProducto] = useState({
        imagenProducto:'',
        descripcion: '',
        precio: '',
        categoria: '',
        region: ''
      });
    
      const{imagenProducto,descripcion, precio, categoria, region} =producto;
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    
      const registerCita = async () => {
        try {
    
          const response = await axios.post('http://localhost:8888/api/v1/devcamps/productos', producto, {
            headers: {
            'Content-Type': 'application/json',
    },
    });  
        setSuccessMessage('producto registrado con éxito');
        setError('');
        } catch (error) {
        console.error('Error en el registro:', error);
    
        if (error.response) {
          console.log('Respuesta del servidor:', error.response);
          if (error.response.data && error.response.data.message) {
            setError('Error: ' + error.response.data.message);
          } else {
            setError('Error en el registro' );
          }
        } else {
          setError('Error en el : ' + error.message);
        }
      }
    };
    
      const onChange = (e) => {
        setProducto({
          ...producto,
          [e.target.name]: e.target.value
        });
        mostrarImagenSeleccionada()
      };
    
    
    const onSubmit = (e) => {
        e.preventDefault();
        registerCita()
      };
    return (
        <div className='interfazVendedor'>
            <nav>
                <div className='nav'>
                    <div className='tituloNav'>
                        <b>MiDulceOnline</b>
                    </div>
                    <div className="iconoPerfil">
                        <h5 className='nombreE'>Nombre Empresa</h5>
                        <label className='botonPerfil' htmlFor='btn-menu'><img src='/img/avatar.png' className='imgPerfil' width={50}></img></label>
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
                        <Link><b>Ventas</b></Link>
                        <Link className='activo' to={'/registrarP'}><b>Registrar Producto</b></Link>
                        <Link><b>Cerrar Sesion</b></Link>
                    </nav>
                    <label htmlFor='btn-menu'>×</label>
                </div>
            </div>

            <div className='formProductos'>
                <div className='register_box'>
                    <div className='tituloRE'>
                        <h4>Registrar Productos</h4>
                    </div>
                    <form method='post' onSubmit={onSubmit}>
                        <div className='groupP'>
                            <div className='imgEspacio'>
                                <img id="imagenSeleccionada" className='imgP' src='#' width={258}></img>
                                <div className="input-group mt-3">
                                    <input type="file" value={imagenProducto} name='logoEmpresa' className='form-control' id="archivoInput" onChange={onChange}/>
                                </div>
                            </div>
                            <div className='camposP'>
                                <div className="form-floating mb-3">
                                    <input type="text" value={descripcion} name='descripcion' className="form-control" id="floatingInput" placeholder="name@example.com" required onChange={onChange}/>
                                    <label htmlFor="floatingInput">Descripcion Producto</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="number" value={precio} name='precio' className="form-control" id="floatingInput" placeholder="name@example.com" required onChange={onChange}/>
                                    <label htmlFor="floatingInput">Precio</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" value={categoria} name='categoria' className="form-control" id="floatingInput" placeholder="name@example.com" required onChange={onChange}/>
                                    <label htmlFor="floatingInput">Categoria</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" value={region} name='region' className="form-control" id="floatingInput" placeholder="name@example.com" required onChange={onChange}/>
                                    <label htmlFor="floatingInput">Region Producto</label>
                                </div>
                                <hr></hr>
                                <div className='botonesP'>
                                    <input type='submit' className='btn btn-primary' value={'Ingresar'}></input>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default RegistrarP;