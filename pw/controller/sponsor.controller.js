//definição de constantes
//const saltRounds = 10;
const connect = require('../config/connect');
//var bcrypt = require('bcrypt');
//colocar as quatro funções
//função de leitura que retorna o resultado no callback
function read(req, res) {
    //criar e executar a query de leitura na BD
    connect.con.query('Select * from user_profile, sponsor, space_sponsor, space where user_profile.id_user_profile=sponsor.id_user_profile and space_sponsor.id_space=space.id_space and is_active=1' , function (err, rows, fields) {
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
function readS(req, res) {
    connect.con.query('Select * from user_profile, sponsor, space_sponsor, space where user_profile.id_user_profile=sponsor.id_user_profile and space_sponsor.id_space=space.id_space and is_active=0 ', function (err, rows, fields) {
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

/*
//função de gravação que recebe os 3 parâmetros
function save(req, res) {
    //receber os dados do formuário que são enviados por post
    const user_profile_name = req.sanitize('user_profile_name').escape();
    const district = req.sanitize('district').escape();
    const email = req.sanitize('email').escape();
    const keyword = req.sanitize('keyword').escape();
    //const genre = req.sanitize('genre').escape();
    const birthdate = req.sanitize('birthdate').escape();

    req.checkBody("user_profile_name", "Insira apenas texto").matches(/^[a-z ]+$/i);
    req.checkBody("email", "Insira um email válido.").isEmail();

    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    }
    else {
        if (user_profile_name != "NULL" && email != "NULL") {
            
            console.log("without hahsh:" + req.body.keyword);
            var query = "";
            bcrypt.hash(keyword, saltRounds).then(function (hash) {
                var post = {
                    user_profile_name: user_profile_name,
                    district: district,
                    email: email,
                    //genre: genre,
                    birthdate: birthdate
                };
                var posts = {
                    keyword: hash,
                    email: email
                }
                console.log("with hash:" + hash);
                query = connect.con.query('INSERT INTO user_profile SET ?', post, function (err, rows, fields) {
                    console.log(query.sql);
                    if (!err) {
                        query = connect.con.query('INSERT INTO login SET ?', posts, function (err, rows, fields) {
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
                    }
                })
            })
        } else
            res.status(jsonMessages.db.requiredData.status).send(jsonMessages.db.requiredData);
    }
};
//efetuar updade de todos os dados para um determinado iduser
function update(req, res) {
    //receber os dados do formuário que são enviados por post
    const user_profile_name = req.sanitize('user_profile_name').escape();
    const district = req.sanitize('district').escape();
    const email = req.sanitize('email').escape();
    const keyword = req.sanitize('keyword').escape();
    //const genre = req.sanitize('genre').escape();
    const birthdate = req.sanitize('birthdate').escape();
    console.log("without hahsh:" + req.body.keyword);
    var query = "";
    bcrypt.hash(keyword, saltRounds).then(function (hash) {
        console.log("with hash:" + hash);
        var update = {
            user_profile_name,
            district,
            //genre,
            birthdate,
            email
        };
        var updates = {
            hash,
            email
        };

        query = connect.con.query('INSERT INTO user_profile SET user_profile_name=?, district=?, date_birth=? where email=?', update,
            function (err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    query = connect.con.query('INSERT INTO login keyword=?, where email=?', updates,
                        function (err, rows, fields) {
                            console.log(query.sql);
                            if (!err) {
                                console.log("Number of records updated: " + rows.affectedRows);
                                res.status(200).send({ "msg": "update with success" });
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
    const email = req.sanitize('email').escape();
    const post = {
        email: email
    };
    connect.con.query('DELETE from user_profile, sponsor, space_sponsor, space where user_profile.id_user_profile=sponsor.id_user_profile and space_sponsor.id_space=space.id_space and email = ?' , post, function (err, rows, fields) {
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
    readS: readS,
    //save: save,
    //update: update,
    deleteID: deleteID
};