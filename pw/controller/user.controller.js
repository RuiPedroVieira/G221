//definição de constantes
const saltRounds = 10;
const connect = require('../config/connect');
var bcrypt = require('bcrypt');
//colocar as quatro funções
//função de leitura que retorna o resultado no callback
function read(req, res) {
    //criar e executar a query de leitura na BD
    connect.con.query('SELECT * from user_profile, login where user_profile.email=login.email ', function (err, rows, fields) {
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
    const id_user_profile = req.sanitize('id_user_profile').escape();
    const post = {
        id_user_profile: id_user_profile
    };
    connect.con.query('SELECT * from user_profile where id_user_profile= ? ', post,
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
//função de gravação que recebe os 3 parâmetros
function save(req, res) {
    //receber os dados do formuário que são enviados por post
    //const id_user_profile = req.sanitize('id_user_profile').escape();
    const user_profile_name = req.sanitize('user_profile_name').escape();
    const district = req.sanitize('district').escape();
    //const id_login = req.sanitize('id_login').escape();
    const email = req.sanitize('email').escape();
    const keyword = req.sanitize('keyword').escape();
    const user_type = req.sanitize('user_type').escape();
    // const id_login_type = req.sanitize('id_login_type').escape();
    console.log("without hahsh:" + req.body.keyword);
    var query = "";
    bcrypt.hash(keyword, saltRounds).then(function (hash) {
        var post = {
            //id_user_profile: id_user_profile,
            user_profile_name: user_profile_name,
            district: district,
            //id_login: id_login,
            email: email,
            //id_login_type: id_login_type,
        };
        var posts = {
            keyword: hash,
            email: email
        }
        var postss = { user_type: user_type }

        console.log("with hash:" + hash);
        query = connect.con.query('INSERT INTO login_type SET ?', postss, function (err, rows, fields) {
            console.log(query.sql);
            if (!err) {
                query = connect.con.query('INSERT INTO login SET ?', posts, function (err, rows, fields) {
                    console.log(query.sql);
                    if (!err) {
                        query = connect.con.query('INSERT INTO user_profile SET ?', post, function (err, rows, fields) {
                            console.log(query.sql);
                            if (!err) {
                                res.status(200).location(rows.insertId).send({
                                    "msg": "inserted with success"
                                });
                                console.log("Number of records inserted: " + rows.affectedRows);
                            }
                        })
                    }
                    else {
                        if (err.code == "ER_DUP_ENTRY") {
                            res.status(409).send({ "msg": err.code });
                            console.log('Error while performing Query.', err);
                        } else res.status(400).send({ "msg": err.code });
                    }
                })
            }
        })
    })
};
*/
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
} */
/* //função que apaga todos os dados de um iduser
function deleteID(req, res) {
    //criar e executar a query de leitura na BD
    const id_user_profile = req.sanitize('id_user_profile').escape();
    const post = {
        id_user_profile: id_user_profile
    };
    connect.con.query('DELETE from user_profile where id_user_profile = ?', post, function (err, rows, fields) {
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
}*/
//exportar as funções
module.exports = {
    read: read,
    readID: readID,
    /*save: save,*/
    //update: update,
    //deleteID: deleteID
};