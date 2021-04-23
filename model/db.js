import { default as mongodb } from 'mongodb';
let MongoClient = mongodb.MongoClient;
// const assert = require('assert');

//connection to url
const url = 'mongodb://localhost:27017';

//database name
const dbName = 'choose_adventure';

//create a new MongoClient
// const client = new MongoClient(url);


const client = await MongoClient.connect(url, { useUnifiedTopology: true })
const db = client.db(dbName);



//   .then(client => {
//     console.log('Connected to Database')
//     const db = client.db(dbName)
//   })

// //use connect method to connect to the server
// client.connect(function(err) {
//     // assert.equal(null, err);
//     console.log('Connected successfully to server');

//     const nameIra = {
//         name: 'ira'
//     };
    
//     users.insertOne(nameIra)
    
    
//     const db = client.db(dbName);

//     client.close();
// });

export { db, client };