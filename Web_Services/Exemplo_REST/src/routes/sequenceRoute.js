const SequenceController = require('../controllers/SequenceController')
  module.exports = (server) => {
     server.post('/sequence', SequenceController.post);
     server.put('/sequence', SequenceController.put);
     server.delete('/sequence', SequenceController.delete);
     server.get('/sequence', SequenceController.get);
     server.get('/sequence/:id', SequenceController.getById);
  }