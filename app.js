if (process.env.NODE_ENV == 'production') {
  require('dotenv').config();
  console.log(process.env);
    console.log("MONGO URI",process.env.MONGOURI);
}

const express = require('express')
const products_routes = require('./routes/products.js')
const slugify = require('slugify');

//Server instantiation
const app = express()
const PORT = process.env.PORT || 5000;

//Server configuration: template engine
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('/views'));

//Midleware
app.use(express.json())
app.use('/', products_routes)


// Bienvenida
const welcome = slugify('WELCOME TO THE SERVER','*');



//Server startup
app.listen(5000, () => {
    console.log(welcome);
    console.log(`server is listening on port ${PORT}`)
})


