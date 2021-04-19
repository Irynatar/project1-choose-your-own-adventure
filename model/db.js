const { MongoClient } = require("mongodb").MongoClient;
const assert = require('assert');

//connection to url
const url = 'mongodb://localhost:27017';

//database name
const dbName = 'kiddnapping-in-Paris';

//create a new MongoClient
const client = new MongoClient(url);

//use connect method to connect to the server
client.connect(function(err) {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    client.close();
});