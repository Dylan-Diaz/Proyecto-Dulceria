const express = require("express")
const productosModel = require('../modelos/ModeloProductos')
const moongose = require('mongoose')
const router = express.Router()



router.post('/registerP', 
            async(req, res)=>{
                try {
                    const productos = await productosModel.create(express.request.body)

                    response.status(201).json({
                        "success": true,
                        msg:"producto creado con exito"
                    })
                } catch (error) {
                    response.status(500).json({
                        success: false,
                        msg: error.message
                    })
                    
                }
})

module.exports = router
