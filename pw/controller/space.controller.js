//definição de constantes
//const saltRounds = 10;
const connect = require('../config/connect');
//var bcrypt = require('bcrypt');
//colocar as quatro funções
//função de leitura que retorna o resultado no callback
function read(req, res) {
    //criar e executar a query de leitura na BD
    connect.con.query('Select * from space, space_manager, manager, user_profile where space.id_space=space_manager.id_space and space_manager.id_manager=manager.id_manager and manager.id_user_profile=user_profile.id_user_profile and space.is_actives=1', function (err, rows, fields) {
        if (!err) {
            //verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso contrário envia os resultados (rows).
            if (rows.length == 0) {
                res.status(404).send("Data not found");
            } else {
                res.status(200).send(rows);
            }
        } else
            console.log('Error while performing Query.', err);
    });
}
//função de leitura que retorna o resultado de um iduser
function readAs(req, res) {
    //criar e executar a query de leitura na BD
    connect.con.query('Select * from space, space_manager, manager, user_profile where space.id_space=space_manager.id_space and space_manager.id_manager=manager.id_manager and manager.id_user_profile=user_profile.id_user_profile and space.is_actives=0 ',  function (err, rows, fields) {
            if (!err) {
                //verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso contrário envia os resultados (rows).
                if (rows.length == 0) {
                    res.status(404).send({
                        "msg": "data not found"
                    });
                } else {
                    res.status(200).send(rows);
                }
            } else
                res.status(400).send({
                    "msg": err.code
                });
            console.log('Error while performing Query.', err);
        });
}
//função de gravação que recebe os 3 parâmetros
/*function save(req, res) {
    //receber os dados do formuário que são enviados por post
    const space_description = req.sanitize('space_description').escape();
    const address = req.sanitize('address').escape();
    const picture = req.sanitize('picture').escape();
    const price = req.sanitize('price').escape();
    const max_capacity = req.sanitize('max_capacity').escape();
    const balneary = req.sanitize('balneary').escape();

    //req.checkBody("user_profile_name", "Insira apenas texto").matches(/^[a-z ]+$/i);
    //req.checkBody("email", "Insira um email válido.").isEmail();

    //console.log("without hahsh:" + req.body.keyword);
    var query = "";
    //bcrypt.hash(keyword, saltRounds).then(function (hash) {
    var post = {
        space_description: space_description,
        address: address,
        picture: picture,
        price: price,
        max_capacity: max_capacity,
        balneary: balneary,
    };
    //console.log("with hash:" + hash);
    query = connect.con.query('INSERT INTO space SET ?', post, function (err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            res.status(200).location(rows.insertId).send({
                "msg": "inserted with success"
            });
            console.log("Number of records inserted: " + rows.affectedRows);
        }
        else {
            if (err.code == "ER_DUP_ENTRY") {
                res.status(409).send({ "msg": err.code });
                console.log('Error while performing Query.', err);
            } else res.status(400).send({ "msg": err.code });
        }
    })
};
//efetuar updade de todos os dados para um determinado iduser
function update(req, res) {
    //receber os dados do formuário que são enviados por post
    const space_description = req.sanitize('space_description').escape();
    const address = req.sanitize('address').escape();
    const picture = req.sanitize('picture').escape();
    const price = req.sanitize('price').escape();
    const max_capacity = req.sanitize('max_capacity').escape();
    const balneary = req.sanitize('balneary').escape();
   // console.log("without hahsh:" + req.body.keyword);
    var query = "";
    //bcrypt.hash(keyword, saltRounds).then(function (hash) {
        //console.log("with hash:" + hash);
        var update = {
            space_description,
            address,
            picture,
            price,
            max_capacity,
            balneary,
            id_space,
        };
        query = connect.con.query('INSERT INTO space SET space_description=?, address=?, picture=?, price=?, max_capacity=?, balneary=? where id_space=?', update,
            function (err, rows, fields) {
                console.log(query.sql);
    
                            if (!err) {
                                console.log("Number of records updated: " + rows.affectedRows);
                                res.status(200).send({ "msg": "update with success" });
                            }
                 else {
                    res.status(400).send({ "msg": err.code });
                    console.log('Error while performing Query.', err);
                }
            });
}*/
//função que apaga todos os dados de um iduser
function deleteID(req, res) {
    //criar e executar a query de leitura na BD
    const id_space = req.sanitize('id_space').escape();
    const post = {
        id_space:id_space
    };
    connect.con.query('Delete space, space_manager, manager, user_profile where space.id_space=space_manager.id_space and space_manager.id_manager=manager.id_manager and manager.id_user_profile=user_profile.id_user_profile', post, function (err, rows, fields) {
        if (!err) {
            //verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso contrário envia os resultados (rows).
            if (rows.length == 0) {
                res.status(404).send({
                    "msg": "data not found"
                });
            } else {
                res.status(200).send({
                    "msg": "success"
                });
            }
        } else
            console.log('Error while performing Query.', err);
    });
}
//exportar as funções
module.exports = {
    read: read,
    readAs: readAs,
    //save: save,
    //update: update,
    deleteID: deleteID
};