//Importando
const soap = require("soap")
const express = require("express")
var fs = require("fs")
var porta = 8001

//Preciso definir que o server vai usar o express
const server = express()
  
var myservice = {
  ws: {
      calc: {
          somar : function(args) {
              var n = 1*args.a + 1*args.b;
              return { sumres : n };
          },
          multiplicar : function(args) {
                var n = args.a * args.b;
                return { mulres : n };
          }
      }
    }
};

//FileSync consegue ler o que a gente quer
const xml = fs.readFileSync('wscalc1.wsdl', 'utf8');

server.listen(porta, function(){
    // Vou ouvir o server, no caminho /wscalc1, vai rodar o servico "myservice" que defini em cima, baseado na descriçao xml
    soap.listen(server, '/wscalc1', myservice, xml, function(){
      console.log('server initialized -> ' + porta);
       });
});