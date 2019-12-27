//quando inicia a página faz
window.onload = function () {
    //chama a função para atualizar os users
    refreshUser(); //adicionar função de validação ao formulário
    validator();
    document.getElementById("formNewUser").onsubmit = function (e) {
        //validação do formulário ao submeter
        validator();
    };
    //função de validação
    function validator() {
        let validator = new Validator(document.querySelector('form[name="formNewUser"]'), function
            (err, res) {
            //se validador for válido, res=true e executa o saveSponsor()
            if (res) {
                saveUser();
            }
        },{//cria novas regras, verificase o valor do campo que valida é igual ao campo pwd
            rules: {
                keyword: function (value) {
                    return (value === document.getElementById("keyword").value);
                }
            },
            messages: {
                en: {
                    keyword: {
                        incorrect: "Password didn't match"
                    }
                }
            
            }
        });
    }
    function saveUser() {
        var data = {};
        data.user_profile_name = document.getElementById("user_profile_name").value;
        data.district = document.getElementById("district").value;
        data.email = document.getElementById("email").value;
        data.keyword = document.getElementById("keyword").value;
        data.birthdate = document.getElementById("birthdate").value;
        if (document.getElementById('f').checked) {
            data.genre = document.getElementById('f').value;
        }
        if(document.getElementById('m').checked){
            data.genre = document.getElementById('m').value;
        }

        console.log(data); //debugging para ver os dados que foram enviados
        //chamada fetch para envio dos dados para o servior via POST
        fetch('http://localhost:8080/user_profile', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(data)
        }).then(function (response) {
            if (!response.ok) {
                console.log(response.status); //=> number 100–599
                console.log(response.statusText); //=> String
                console.log(response.headers); //=> Headers
                console.log(response.url); //=> String
                if (response.status === 409) {
                    alert("Duplicated Email");
                } else {
                    throw Error(response.statusText);
                }
            } else {
                document.getElementById("formNewUser").reset(); //limpeza dos dados do form
                alert("submitted with success");
                refreshUser();
            }
        }).then(function (result) {
            console.log(result);
        }).catch(function (err) {
            alert("Submission error"); console.error(err);
        });
    }
    function refreshUser() {
        async function fetchAsync() {
            const renderUser = document.getElementById("result");
            let txt = "";
            const response = await fetch('http://localhost:8080/user_profile');
            const user_profile = await response.json();
            //const response = await response.json();
            //criação de uma tabela para demonstração dos resultados recebidos
            txt += "<table class='table' style='padding:8px; width:100%; margin:0% 0% 0% 0%'>";
            txt += "<thead style='background-color:#607d8b; color:white '>";
            txt += "<tr><th>Id</th><th>Nome</th><th>Distrito</th><th>Email</th><th>Género</th></thead><tbody>";
            //percorrer a variável sponsors e por cada user cria a linha da tabela com os dados presentes
            for (const users of user_profile) {
                txt += "<tr><td style='text-align:middle'>" + users.id_user_profile + "</td><td>" + users.user_profile_name + "</td><td>" + users.district + "</td><td>" + users.email + "</td><td>" + users.genre;
            }
            txt += "</tbody></table>";
            //envia a tabela construida para a view e mostra no object com ID result
            renderUser.innerHTML = txt;
        }
        //chama a função fetchAsync()
        fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));
    }
};
