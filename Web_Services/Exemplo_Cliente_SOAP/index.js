const soap = require("soap")
var url = 'http://www.dneonline.com/calculator.asmx?wsdl'

soap.createClient(url, function(err, client){
    console.log("Descrever o WSDL", client.describe().Calculator.CalculatorSoap)
})