import express from "express"
import session from 'express-session'
import passport from "passport";
import MongoStore from "connect-mongo";


import api from './src/routes/index.js' 
import { URL } from "./src/DB/db.js";
import './src/DB/models/usuarios.js'
import './src/passport/passportConfig.js'

const app = express()
const port = 8080;

app.use( session({
    secret:'c0der',
    resave:true,
    store:MongoStore.create({
        mongoUrl:URL
    }) ,
    saveUninitialized:true
}))




// interacciones
app.listen(port, () => console.log(`Server Iniciado en el ${port}🔥`))
app.use(express.urlencoded({extended: true}));


app.use(express.json())
app.set('views', 'src/views')
app.set('view engine', 'ejs')


app.use(express.static('views'))
app.use(express.static('public'))

app.use(passport.initialize()); 
app.use(passport.session()); 


// rutas
 app.use('/', api);