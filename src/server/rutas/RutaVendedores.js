const express = require('express')
const router = express.Router()
const ModeloVendedor = require('../modelos/ModeloVendedores.js')

router.post('/registerE',
            async(req,res)=>{
                const {nombreContacto,cargo,telefonoContacto,nombreEmpresa,NIT,logoEmpresa,correo,usuario,contrasena} = req.body;
                try {
                    const user = 
                    await ModeloVendedor.create({
                        nombreContacto,
                        cargo,
                        telefonoContacto,
                        nombreEmpresa,
                        NIT,
                        logoEmpresa,
                        correo,
                        usuario,
                        contrasena
                    })
                res
                .status(201)
                .json({
                    sucess:true,
                    msg:"usuario creado exitosamente"
                })
                } catch (error) {
                    res
                    .status(400)
                    .json({
                        sucess:false,
                        message: error.message
                    })
                    
                }
            })




router.post('/login', async(req,res) => {
    const {usuario,contrasena}=req.body;

    if (!usuario || !contrasena) {
        res.status(400).json({
            sucess:false,
            message: "Ingrese el nombre de usuario o la contraseña"
        })
    }
    else{
        try {
            const user = await ModeloVendedor.findOne({ usuario }).select("+contrasena")
            
            if (!user) {
                res.status(400).json({
                    sucess:false,
                    msg:"No se encuentra el usuario en el sistema"
                })
            }
            else{
                const isMatch = await user.comparacionContrasena(contrasena)
                if (!isMatch) {
                    res.status(400).json({
                        success: false,
                        msg:"contraseña incorrecta"
                    })
                }
                else{
                    res.status(200).json({
                        success:true,
                        msg: "La contraseña es correcta",
                        token: user.ObtenerTokenJWT()
                    })
                }
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            })
        }
    }
})

module.exports = router