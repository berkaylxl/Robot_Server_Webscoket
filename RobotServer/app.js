const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');

const robotRoutes = require('./routes/robot')

app.set('view engine', 'ejs');

app.use(express.static('views'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Acces-Control-Allow-Header',
        'Origin,X-Requested-With,Content-Type,Accept,Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods',
            'PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});



app.use('/robot', robotRoutes);

app.use('/',(req, res, next)=> {
    res.render('index');
})

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    })
})


module.exports = app;