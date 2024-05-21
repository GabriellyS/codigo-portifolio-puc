const express = require("express")

const server = express();
const PORT = 3010

//express.json é uma propriedade do express pra interpretar Json
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.listen(PORT, function () {
    console.log('server initialized ' + PORT);
});

require('./src/routes/index')(server)