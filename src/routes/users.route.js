const {Router} = require('express');
const router = Router();
const userController = require('../controllers/users.controller');



//CRUD;
router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);



//Exports:
module.exports = router;