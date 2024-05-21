const soap = require("soap")

var url = "https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl"

soap.createClient(url,function(err, client){
    //Consultando os metodos
    //console.log(client.describe().AtendeClienteService.AtendeClientePort)

    if(err){
        console.log(err)
    }else{
        client.buscaDataAtual(function (err, result){
            if(err){
                console.log(err)
            }else{
                console.log(result.return)
            }
        })
    }
})
