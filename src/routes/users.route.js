const {Router} = require('express');
const router = Router();
const userController = require('../controllers/users.controller');



//CRUD;
router.get('/', userController.getUsers);
router.post('/', userController.createUser);



//Exports:
module.exports = router;