const express = require("express")
const productosModel = require('../modelos/ModeloProductos')
const moongose = require('mongoose')
const router = express.Router()



router.post('/registerP', 
            async(req, res)=>{
                try {
                    const productos = await productosModel.create(express.request.body)

                    res.status(201).json({
                        "success": true,
                        msg:"producto creado con exito"
                    })
                } catch (error) {
                    res.status(500).json({
                        success: false,
                        msg: error.message
                    })
                    
                }
})

module.exports = router
