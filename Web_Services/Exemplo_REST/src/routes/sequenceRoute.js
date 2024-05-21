const SequenceControler = require('../controllers/sequenceControler')
  module.exports = (server) => {
     server.post('/sequence', SequenceControler.post);
     server.put('/sequence', SequenceControler.put);
     server.delete('/sequence', SequenceControler.delete);
     server.get('/sequence', SequenceControler.get);
     server.get('/sequence/:id', SequenceControler.getById);
  }