//rota inicial
const app = require('../server');
const controllerSpace = require('./space.controller');
app.get('/space/', controllerSpace.read);
app.get('/space/', controllerSpace.readAs);
//app.post('/user_profile/', controllerUser.save);
//app.put('/user_profile/:id_user_profile', controllerUser.update);
app.delete('/space/:id_space', controllerSpace.deleteID);