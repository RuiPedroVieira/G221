//rota inicial
const app = require('../server');
const controllerGames = require('./games.controller');
app.get('/games/', controllerGames.read);
app.get('/games/:id_register', controllerGames.readID);
