const soap = require("soap")
var url = 'http://www.dneonline.com/calculator.asmx?wsdl'

soap.createClient(url, function(err, client){
    //Para simplificar o WSDL e ver ele como se fosse JSON tira as barras da linha de baixo
    //console.log("Descrever o WSDL", client.describe().Calculator.CalculatorSoap)

    //err é erro
    client.Add({intA: 70, intB: 2}, function(err, result){
        if(err){
            console.log(err)
        }else{
            console.log("A soma deu: ", result.AddResult)
        }
    })

    client.Subtract({intA: 70, intB: 2}, function(err, result){
        if(err){
            console.log(err)
        }else{
            console.log("A subtração deu: ", result.SubtractResult)
        }
    })

    client.Multiply({intA: 70, intB: 2}, function(err, result){
        if(err){
            console.log(err)
        }else{
            console.log("A multiplicação deu: ", result.MultiplyResult)
        }
    })

    client.Divide({intA: 70, intB: 2}, function(err, result){
        if(err){
            console.log(err)
        }else{
            console.log("A divisão deu: ", result.DivideResult)
        }
    })
})