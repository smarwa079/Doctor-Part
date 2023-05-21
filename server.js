import express from "express";
import { engine } from 'express-handlebars';
import dotenv from 'dotenv'
dotenv.config();
import mongoose from "mongoose";
import adminRoutes from './routes/adminRoutes.js'
import MethodOverride from "method-override";


const app = express();

app.use(express.urlencoded({extended: true}))

app.use(MethodOverride('_method'))

app.use(express.static('public'));

mongoose.connect(process.env.mongoConnectionUrl);

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

//=========================================================================

app.use('/admin', adminRoutes)

//=========================================================================



//=========================================================================



app.listen(process.env.port, () => {
    console.log(`started the application on http://localhost:${process.env.port}`)
});