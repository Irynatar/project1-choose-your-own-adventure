import { default as mongodb } from 'mongodb';
let MongoClient = mongodb.MongoClient;
// const assert = require('assert');

//connection to url
const url = 'mongodb://localhost:27017';

//database name
const dbName = 'choose_adventure';


const client = await MongoClient.connect(url, { useUnifiedTopology: true })
const db = client.db(dbName);

export { db, client };