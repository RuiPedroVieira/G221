const express = require('express');
const port = process.env.PORT || 8080;
const host = process.env.HOST || '127.0.0.1';
//carregar bibliotecas globais
const cors = require('cors');
const bodyParser = require('body-parser');
const expressSanitizer = require('express-sanitizer');
const expressValidator = require('express-validator');
const cookieParser = require('cookie-parser');
//iniciar a aplicação
var app = express();
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.use(expressValidator());
app.listen(port, function (err) {
    if (!err) {
        console.log('Your app is listening on ' + host + ' and port ' + port);
    } else { console.log(err); }
});
//forçar utilização das bibliotecas
app.use(cors());
app.use(cookieParser());
//obriga a utilizar as cookies
app.use(function (req, res, next) {
    // check if client sent cookie
    var cookie = req.cookies.cookieName;
    if (cookie === undefined) {
        // no: set a new cookie
        var randomNumber = Math.random().toString();
        randomNumber = randomNumber.substring(2, randomNumber.length);
        res.cookie('cookieName', randomNumber, {
            maxAge: 900000,
            httpOnly: true,
            secure: true
        });
        console.log('cookie created successfully');
    } else { // yes, cookie was already present
        console.log('cookie exists', cookie);
    }
    next(); // <-- important!
});
//colocar aqui código para express-sessions
module.exports = app;
require('./controller/user_profile.route.js');
require('./controller/manager.route.js');
require('./controller/user.route.js');
require('./controller/games.route.js');
require('./controller/aceptmanager.route.js');
require('./controller/space.route.js');
require('./controller/sponsor.route.js');