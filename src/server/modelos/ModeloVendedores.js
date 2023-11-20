const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema(
    {
        nombreContacto:{
            type:String,
        },
        cargo:{
            type:String,
        },
        telefonoContacto:{
            type:String,
        },
        nombreEmpresa:{
            type:String,
        },
        NIT:{
            type:String,
        },
        logoEmpresa:{
            type:String,
        },
        correo:{
            type: String,
            match: [
                /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/,
                "correo no valido"
            ]
        },
        usuario:{
            type:String,
        },
        contrasena:{
            type:String,
        }
    }
)

userSchema.pre('save', async function (next){
    const sal = await bcryptjs.genSalt(10)
    this.contrasena = await bcryptjs.hash(this.contrasena, sal)
})


userSchema.method.ObtenerTokenJWT = function(){
    const JWT_SECRET_KEY = "una troca salio de durango, a las 2 o 3 de la mañana"
    return jwt.sign({
        id: this._id,
        name: this.name,
        contrasena: this.contrasena,
        role: this.role
    },
        JWT_SECRET_KEY,
        {
            expiresIn: Date.now() + 10000
        }
    )
}

userSchema.method.comparacionContrasena = async function(contrasena){
    return await bcryptjs.compare(contrasena, this.contrasena)
}


const User = module.exports = mongoose.model('User',userSchema)