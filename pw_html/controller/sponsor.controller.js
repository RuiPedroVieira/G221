//quando inicia a página faz
window.onload = function () {
    //chama a função para atualizar os users
    refreshUser(); //adicionar função de validação ao formulário
    refreshSi();
    this.document.getElementById("dataTable2");
    this.document.getElementById("dataTable3");

    function refreshUser() {
        async function fetchAsync() {
            const renderSponsor = document.getElementById("dataTable2");
            let dataTable2 = "";
            const response = await fetch('http://localhost:8080/sponsor');
            const sponsor = await response.json();
            //const response = await response.json();
            //criação de uma tabela para demonstração dos resultados recebidos
            //txt += "<table class='table' style='padding:8px; width:100%; margin:0% 0% 0% 0%'>";
            //txt += "<thead style='background-color:#607d8b; color:white '>";
            //dataTable2 += "<tr><th>Nome</th><th>Email</th><th>Espaço</th></thead><tbody>";
            //percorrer a variável sponsors e por cada user cria a linha da tabela com os dados presentes
            for (const sponsors of sponsor) {
                dataTable2 += "<tr><td style='text-align:middle'>" + sponsors.user_profile_name + "</td><td>" + sponsors.email + "</td><td>" + sponsors.space_description;
            }
            dataTable2 += "</tbody></table>";
            //envia a tabela construida para a view e mostra no object com ID result
            renderSponsor.innerHTML = dataTable2;
        }
        //chama a função fetchAsync()
        fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));
    }
    function refreshSi() {
        async function fetchAsync() {
            const inativo = document.getElementById("dataTable3");
            const dataTable3 = "";
            const response = await fetch('http://localhost:8080/sponsorinativos/');
            const sponsor = await response.json();
            //criação de uma tabela para demonstração dos resultados recebidos
            //dataTable += "<table class='table' style='padding:8px; width:100%; margin:0% 0% 0% 0%'>";
            //dataTable += "<thead style='background-color:#607d8b; color:white '>";
            // dataTable += "<tr><th> Id </th><th>Nome </th><th> Email</th><th> Contacto </th><th>Ver mais </th></thead><tbody>";
            //percorrer a variável sponsors e por cada user cria a linha da tabela com os dados presentes
            for (const sponsors of sponsor) {
                dataTable3 += "<tr><td style='text-align:middle'>" + sponsors.user_profile_name + "</td><td>" + sponsors.address + "</td><td>" + sponsors.mobile_number + "</td><td>" + sponsors.nif;
            }
            dataTable3 += "</tbody></table>";
            //envia a tabela construida para a view e mostra no object com ID result
            inativo.innerHTML = dataTable3;
        }
        //chama a função fetchAsync()
        fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));
    }


    /* function refreshUser() {
         async function fetchAsync() {
             const s = $('#dataTable2').DataTable();
             //const renderManager = $("#dataTable tbody");
             console.log(s);
             const response = await fetch('http://localhost:8080/sponsor');
             const sponsor = await response.json();
             var counter = 1;
             //criação de uma tabela para demonstração dos resultados recebidos
             //dataTable += "<table class='table' style='padding:8px; width:100%; margin:0% 0% 0% 0%'>";
             //dataTable += "<thead style='background-color:#607d8b; color:white '>";
             // dataTable += "<tr><th> Id </th><th>Nome </th><th> Email</th><th> Contacto </th><th>Ver mais </th></thead><tbody>";
             //percorrer a variável sponsors e por cada user cria a linha da tabela com os dados presentes
             for (const sponsors of sponsor) {
                 s.row.add([
                     sponsors.user_profile_name,
                     sponsors.email,
                     sponsors.space_description,
                     counter + '.2',
                     counter + '.3',
                     counter + '.4',
                     //counter + '.5'
                 ]).draw(false);
 
                 counter++;
                 //  dataTable2 += "<tr><td style='text-align:center'>" + managers.id_user_profile + "</td><td>" + managers.user_profile_name + "</td><td>" + managers.email +"</td><td>"+ managers.mobile_number +"</td><td> <button class='btn btn-outline-Dprimary' data-toggle='modal' data-target='#exampleModal'> <i id='editar'class='fas fa-edit'></i></button> <button class='btn btn-outline-Dprimary' data-toggle='modal' data-target='#Modal'><i class='fa fa-trash' aria-hidden='true'></i>" +"</td>  </tr>";
             }
             //dataTable2 += "</tbody></table>";
             //envia a tabela construida para a view e mostra no object com ID result
             // renderManager.innerHTML = dataTable2;
         }
         //chama a função fetchAsync()
 
         fetchAsync().then(data => console.log(data)).catch(reason => console.log(reason.message));
     }*/


}
