//rota inicial
const app = require('../server');
const controllerManager = require('./manager.controller');
app.get('/manager/', controllerManager.read);
app.get('/manager/:id_user_profile', controllerManager.readID);
/*app.post('/manager/', controllerManager.save);*/
/*app.put('/manager/:id_user_profile', controllerManager.update);*/
app.delete('/manager/:id_user_profile', controllerManager.deleteID);
