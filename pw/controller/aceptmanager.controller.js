//definição de constantes
const saltRounds = 10;
const connect = require('../config/connect');
var bcrypt = require('bcrypt');
//colocar as quatro funções
//função de leitura que retorna o resultado no callback
function read(req, res) {
    //criar e executar a query de leitura na BD
    connect.con.query('Select * from manager, user_profile where manager.is_active=0 and manager.id_user_profile=user_profile.id_user_profile', function (err, rows, fields) {
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
function readID(req, res) {
    //criar e executar a query de leitura na BD
    const id_manager = req.sanitize('id_manager').escape();
    const post = {
        id_manager: id_manager
    };
    connect.con.query('SELECT * from manager where id_manager= ? ', post,
        function (err, rows, fields) {
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
/*
//efetuar updade de todos os dados para um determinado iduser
function update(req, res) {
    //receber os dados do formuário que são enviados por post
    const id_user_profile = req.sanitize('id_user_profile').escape();
    const user_profile_name = req.sanitize('user_profile_name').escape();
    const district = req.sanitize('district').escape();
    const id_login = req.sanitize('id_login').escape();
    const email = req.sanitize('email').escape();
    const keyword = req.sanitize('keyword').escape();
    const id_login_type = req.sanitize('id_login_type').escape();
    const user_type = req.sanitize('user_type').escape();
    console.log("without hahsh:" + req.body.keyword);
    var query = "";
    bcrypt.hash(keyword, saltRounds).then(function (hash) {
        console.log("with hash:" + hash);
        var update = {
            id_user_profile,
            user_profile_name,
            district,
            id_login,
            email
        };
        var updates = {
            hash,
            id_login_type,
            email,
            id_login
        };
        var updatess = { 
            id_login_type, 
            user_type 
        };
        query = connect.con.query('INSERT INTO login_type id_login_type=?, user_type=? where id_login_type=?', updatess,
            function (err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    query = connect.con.query('INSERT INTO login keyword=?, id_logintype=? where id_login=?', updates,
                        function (err, rows, fields) {
                            console.log(query.sql);
                            if (!err) {
                                query = connect.con.query('INSERT INTO user_profile SET id_user_profile=?, user_profile_name=?, district=?, id_login=?, email=? where id_user_profile=?', update,
                                    function (err, rows, fields) {
                                        console.log(query.sql);
                                        if (!err) {
                                            console.log("Number of records updated: " + rows.affectedRows);
                                            res.status(200).send({ "msg": "update with success" });
                                        }
                                    })
                            }
                        })
                } else {
                    res.status(400).send({ "msg": err.code });
                    console.log('Error while performing Query.', err);
                }
            });
    });
}

*/





//função que apaga todos os dados de um iduser
function deleteID(req, res) {
    //criar e executar a query de leitura na BD
    const id_manager = req.sanitize('id_manager').escape();
    const post = {
        id_manager: id_manager
    };
    connect.con.query('DELETE from manager where id_manager = ?', post, function (err, rows, fields) {
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
    readID: readID,
    /*save: save,*/
    /*update: update,*/
    deleteID: deleteID
};