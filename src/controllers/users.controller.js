const userController = {}
const User = require('../models/user.model');

//Get: all users
userController.getUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.send(users);
    } catch (e){
        console.log('Error en GET controller');
        console.error(e);
    }

}
//POST: create an user
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

//GET: single user
userController.getUser = async (req, res) => {
    try{
        const id = req.params.id;
        const user = await User.findById(id);
        res.json(user);
    }catch (e){
        console.log("Error en GET single user")
        console.error(e);
    }
}

//PUT: update a single user:
userController.updateUser = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id, req.body);
        res.json({message: "User updated"})

    } catch(e) {
        console.log('Error en PUT');
        console.error(e);
    }

}

//DELETE: single user
userController.deleteUser = async (req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.json({message: "User deleted"})

    }catch (e) {
        throw new Error('we cannot delete the user')
    }
}




//Exports:
module.exports = userController;