const router = require('express-promise-router')();
const todoController = require('../controllers/todo.controller');

router.post('/todo', todoController.create);

router.get('/todo', todoController.listAll);

router.get('/todo/:id', todoController.findById);

router.put('/todo/:id', todoController.updateById);

router.delete('/todo/:id', todoController.deleteById);

module.exports = router;
