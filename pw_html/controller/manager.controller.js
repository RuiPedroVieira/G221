//quando inicia a página faz


window.onload = function () {
    //chama a função para atualizar os users
    refreshManager(); ;
    this.document.getElementById("dataTable") ;

               
            function refreshManager() {
                async function fetchAsync() {
                    const t =   $('#dataTable').DataTable();
                    //const renderManager = $("#dataTable tbody");
                    console.log(t);
                       const response = await fetch('http://localhost:8080/manager');
                    const manager = await response.json();
                    var counter = 1;
                    //criação de uma tabela para demonstração dos resultados recebidos
                    //dataTable += "<table class='table' style='padding:8px; width:100%; margin:0% 0% 0% 0%'>";
                    //dataTable += "<thead style='background-color:#607d8b; color:white '>";
                   // dataTable += "<tr><th> Id </th><th>Nome </th><th> Email</th><th> Contacto </th><th>Ver mais </th></thead><tbody>";
                    //percorrer a variável sponsors e por cada user cria a linha da tabela com os dados presentes
                    for (const managers of manager ) {
                        t.row.add( [
                            managers.id_user_profile, 
                            managers.user_profile_name,
                            managers.email,
                            managers.mobile_number,
                            
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
        }
       