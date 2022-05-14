import express, { Application } from "express";
import router from "./routes/routes";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connect } from "./dbconnect";
import * as dotenv from "dotenv";

dotenv.config();

const app: Application = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/api', router);
app.use('/uploads', express.static('uploads'));

//connect();

app.listen(8080, () => {
    console.log(`Server started on http://localhost:8080`);
});
// define a route handler for the default home page
