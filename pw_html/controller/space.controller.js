//quando inicia a página faz
window.onload = function () {
    //chama a função para atualizar os users
    refreshSpace(); //adicionar função de validação ao formulário
   // validator();
   // document.getElementById("formNewUser").onsubmit = function (e) {
        //validação do formulário ao submeter
  //      validator();
  //  };
    //função de validação
 /*   function validator() {
        let validator = new Validator(document.querySelector('form[name="formNewUser"]'), function
            (err, res) {
            //se validador for válido, res=true e executa o saveSponsor()
            if (res) {
                saveUser();
            }
        },)}{//cria novas regras, verificase o valor do campo que valida é igual ao campo pwd
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
        });*/
  /*  function saveUser() {
        var data = {};
        data.user_profile_name = document.getElementById("user_profile_name").value;
        data.district = document.getElementById("district").value;
        data.email = document.getElementById("email").value;
        data.keyword = document.getElementById("keyword").value;
        data.birthdate = document.getElementById("birthdate").value;
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
    }*/
    function refreshSpace() {
        async function fetchAsync() {
            const renderSpace =  $('#dataTable9').DataTable();
            //const renderManager = $("#dataTable tbody");
            console.log(renderSpace);
               const response = await fetch('http://localhost:8080/space');
            const space = await response.json();
            var counter = 1;
            //criação de uma tabela para demonstração dos resultados recebidos
            //dataTable += "<table class='table' style='padding:8px; width:100%; margin:0% 0% 0% 0%'>";
            //dataTable += "<thead style='background-color:#607d8b; color:white '>";
           // dataTable += "<tr><th> Id </th><th>Nome </th><th> Email</th><th> Contacto </th><th>Ver mais </th></thead><tbody>";
            //percorrer a variável sponsors e por cada user cria a linha da tabela com os dados presentes
            for (const spaces of space) {
                renderSpace.row.add( [
                    spaces.space_description, spaces.address, spaces.user_profile_name, spaces.mobile_number, spaces.final_date,
                    counter +'.2',
                    counter +'.3',
                    counter +'.4',
                    counter +'.5'
                ] ).draw( false );
         
                counter++;
                     //  dataTable2 += "<tr><td style='text-align:center'>" + managers.id_user_profile + "</td><td>" + managers.user_profile_name + "</td><td>" + managers.email +"</td><td>"+ managers.mobile_number +"</td><td> <button class='btn btn-outline-Dprimary' data-toggle='modal' data-target='#exampleModal'> <i id='editar'class='fas fa-edit'></i></button> <button class='btn btn-outline-Dprimary' data-toggle='modal' data-target='#Modal'><i class='fa fa-trash' aria-hidden='true'></i>" +"</td>  </tr>";
            }
            //dataTable2 += "</tbody></table>";
            //envia a tabela construida para a view e mostra no object com ID result
           // renderManager.innerHTML = dataTable2;
        }
        //chama a função fetchAsync()
      
        fetchAsync().then(data => console.log(data)).catch(reason => console.log(reason.message));
    }
};

