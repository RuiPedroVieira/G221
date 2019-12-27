//rota inicial
const app = require('../server');
const controllerUser = require('./user_profile.controller');
app.get('/user_profile/', controllerUser.read);
app.get('/user_profile/:id_user_profile', controllerUser.readID);
app.post('/user_profile/', controllerUser.save);
app.put('/user_profile/:id_user_profile', controllerUser.update);
app.delete('/user_profile/:id_user_profile', controllerUser.deleteID);
module.exports = app;
