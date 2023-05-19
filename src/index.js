const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;

const routes = require('./routes');
        

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined')); //http logger
app.use(
    express.urlencoded({
        extended: true,
    }),
); //import middleware su li kieu form
app.use(express.json()); //import mideleware su li xode js

//template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs', //set lai duoi handerbar
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));
console.log(__dirname);

//routes init
routes(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
