const userController = {}
const User = require('../models/user.model');

//Get:
userController.getUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.send(users);
    } catch (e){
        console.log('Error en GET controller');
        console.error(e);
    }

}
userController.createUser = async (req, res) => {
    try{
        const newUser = new User(req.body);
        await newUser.save();
        res.json({message: "User created"});
    }catch (e){
        console.log('Error en POST Controller');
        console.log(e);
    }

}



//Exports:
module.exports = userController;