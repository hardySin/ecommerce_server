import express, { Application ,Request, Response , NextFunction} from "express" ;
import path from "path";
const app:Application = express();
 
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
import config from '../config/config';
import router  from "../routes/routes";


app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/api', router);
app.use('/uploads', express.static('uploads'));
mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then((result:any) => {
        console.log("connected to DB")
        // start the Express server
        app.listen( config.server.port, () =>      
         {console.log( `server started at ${config.server.hostname}:${ config.server.port}` )});
     })
    .catch((error:any) => {
        console.log("some error occuring" , error)
      });
    
    
// define a route handler for the default home page
app.get( "/", ( req:Request, res :Response, next:NextFunction) => {
    res.send( "Hello world!" );
} );

 