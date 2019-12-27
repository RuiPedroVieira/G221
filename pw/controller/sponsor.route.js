//rota inicial
const app = require('../server');
const controllerSponsor = require('./sponsor.controller');
app.get('/sponsor/', controllerSponsor.read);
app.get('/sponsorinativos/', controllerSponsor.readS);
//app.post('/sponsor/', controllerSponsor.save);
//app.put('/sponsor/:id_sponsor', controllerSponsor.update);
app.delete('/sponsor/:id_sponsor', controllerSponsor.deleteID);