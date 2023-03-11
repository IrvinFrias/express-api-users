const database = require('./database');
const app = require('./app');



const main = () =>{
    //Init server:
    app.listen(app.get('port'));
    console.log('Server listen on port: ' + app.get('port'));
}
main();