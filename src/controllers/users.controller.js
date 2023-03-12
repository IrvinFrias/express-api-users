const userController = {}
const usersCollection = require('../database');
const User = require('../models/user.model');
const {ObjectId} = require('mongodb');

//Get: all users
userController.getUsers = async (req, res) => {
    try{
        const users = await usersCollection.find().toArray();
        res.send(users);
    } catch (e){
        console.log('Error en GET controller');
        console.error(e);
    }

}
//POST: create user
userController.createUser = async (req, res) => {
    try{
        const newUser = new User(req.body);
        await usersCollection.insertOne(newUser);
        res.json({message: "User created"});
    }catch (e){
        console.log('Error en POST Controller');
        console.log(e);
    }

}

//GET: single user
userController.getUser = async (req, res) => {
    try{
        const query = {"_id": new ObjectId(req.params.id) }
        const user = await usersCollection.findOne(query);
        res.json(user);
    }catch (e){
        console.log("Error en GET single user")
        console.error(e);
    }
}

//PUT: update a single user:
userController.updateUser = async (req, res) => {
    try {
        const id = new ObjectId(req.params.id);
        const replaceDocument = {
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone,
        }
        const filter = { _id: id }

        await usersCollection.replaceOne(filter, replaceDocument);
        res.json({message: "User updated"})

    } catch(e) {
        console.log('Error en PUT');
        console.error(e);
    }

}

//DELETE: single user
userController.deleteUser = async (req, res) => {
    try{
        await usersCollection.deleteOne({"_id": new  ObjectId(req.params.id)});
        res.json({message: "User deleted"}).status(204);

    }catch (e) {
        res.status(500).json({message: "Error interno del servidor"})
        throw new Error('we cannot delete the user');
    }
}




//Exports:
module.exports = userController;