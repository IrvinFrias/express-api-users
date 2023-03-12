const dotenv = require('dotenv');
const { MongoClient, ServerApiVersion } = require('mongodb');


dotenv.config();
const password = process.env.MONGODB_PASSWORD;
const uri = `mongodb+srv://Irvin-Frias:${password}@app-employee.eugjxng.mongodb.net/?retryWrites=true&w=majority`;


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const runDatabase = async () => {
    try{
        await client.connect();
        await client.db("admin").command({ping: 1})
        console.log("connected successfully to server");
    }catch (e){
        console.log(e)
    }
}
runDatabase().catch(console.dir);

const usersCollection = client.db("users-express").collection("users")
module.exports = usersCollection;
