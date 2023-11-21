const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const productoSchema = new mongoose.Schema(
    {
        descripcion:{
            type:String,
        },
        precio:{
            type:String,
        },
        categoria:{
            type:String,
        },
        region:{
            type:String,
        }
    }
)

const productos = module.exports = mongoose.model('Productos',productoSchema)