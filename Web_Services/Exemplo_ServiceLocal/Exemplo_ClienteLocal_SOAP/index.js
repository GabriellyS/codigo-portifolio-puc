const soap = require("soap")
var url = "http://localhost:8001/wscalc1?wsdl"

soap.createClient(url, function(err, client) {
    if (err) throw err;
    //Descrevendo o wsdl
    //console.log(client.describe().ws.calc);
    
    //err é erro, e res é resultado
    client.multiplicar({a: 4,b: 3},function(err,res){
        if (err) throw err;
        console.log(res.mulres);
      });
      client.somar({a: 4,b: 3},function(err,res){
        if (err) throw err;
        console.log(res.sumres);
      });
  });