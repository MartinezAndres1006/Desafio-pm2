import express from "express"
import session from 'express-session'
import passport from "passport";
import MongoStore from "connect-mongo"
import yargs from 'yargs'
import {hideBin} from "yargs/helpers";
import dotenv from 'dotenv'
import api from './src/routes/index.js' 
import { AtlasMongo } from "./src/DB/db.js";
import './src/DB/models/usuarios.js'
import './src/passport/passportConfig.js'



dotenv.config({path:'./.env'})
const clave= process.env.secret




const app = express()

app.use( session({
    secret:clave,
    resave:true,
    store:MongoStore.create({
        mongoUrl:AtlasMongo
    }) ,
    saveUninitialized:true
}))








                                            // Aca esta el inicio con el yargs
let port

yargs(hideBin(process.argv))
    .command('list', 'List all commands', /*handler*/)
    .command({
        command: 'puerto',
        describe: 'Aqui recibo el puerto',
        builder: {
            numero: {
                describe: 'Numero',
                type: 'number',
                demandOption: false
            }
        },
        handler: (argv) => {
            console.log(argv)
            port= argv.numero
        }
    })
    .parse();

    if(port==undefined){
        app.listen(8080, () => console.log(`Server Iniciado en el 8080🔥`))

    }else{
        app.listen(port, () => console.log(`Server Iniciado en el ${port}🔥`))

    }
    


                                                                
    
    
                                        // interacciones

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


 
 




   