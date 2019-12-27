//quando inicia a página faz

window.onload = function () {
    //chama a função para atualizar os users
    aceptManager(); ;
    this.document.getElementById("dataTable10") ;

    
/*função de validação
function validator() {
    let validator = new Validator(document.querySelector('form[name="formNewSponsor"]'), function
        (err, res) {
        //se validador for válido, res=true e executa o saveSponsor()
        if (res) {
            saveMan();
        }
    } /*{//cria novas regras, verificase o valor do campo que valida é igual ao campo pwd
        rules: {
            password: function (value) {
                return (value === document.getElementById("pwd").value);
            }
        },
        messages: {
            en: {
                password: {
                    incorrect: "Password didn't match"
                }
            }
        }
    });
}
/*
function saveSponsor() {
    var data = {};
    data.id_sponsor = document.getElementById("id_sponsor").value;
    data.address = document.getElementById("address").value;
    data.mobile_number = document.getElementById("mobile_number").value;
    data.nif = document.getElementById("nif").value;
    data.is_active = document.getElementById("is_active").value;
    data.id_user_profile = document.getElementById("id_user_profile").value;   
    console.log(data); //debugging para ver os dados que foram enviados
    //chamada fetch para envio dos dados para o servior via POST
    fetch('http://localhost:8080/sponsor', {
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
            document.getElementById("formNewSponsor").reset(); //limpeza dos dados do form
            alert("submitted with success");
            refreshSponsor();
        }
    }).then(function (result) {
        console.log(result);
    }).catch(function (err) {
        alert("Submission error"); console.error(err);
    });
} */

           
           
function aceptManager() {
    async function fetchAsync() {
        const k =   $('#dataTable10').DataTable();
        //const renderManager = $("#dataTable tbody");
        console.log(k);
           const response = await fetch('http://localhost:8080/manager');
        
        const manager = await response.json();
        var counter = 1;
        //criação de uma tabela para demonstração dos resultados recebidos
        //dataTable += "<table class='table' style='padding:8px; width:100%; margin:0% 0% 0% 0%'>";
        //dataTable += "<thead style='background-color:#607d8b; color:white '>";
       // dataTable += "<tr><th> Id </th><th>Nome </th><th> Email</th><th> Contacto </th><th>Ver mais </th></thead><tbody>";
        //percorrer a variável sponsors e por cada user cria a linha da tabela com os dados presentes
        for (const managers of manager ) {
            k.row.add( [
                managers.id_user_profile, 
                managers.user_profile_name,
                managers.email,
                managers.mobile_number,
                managers.nib,
                managers.nif,
                managers.nif,
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

       