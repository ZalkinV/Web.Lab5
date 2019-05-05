const express = require("express");
const mongodb = require("mongodb");


const connectionString = "mongodb://localhost:27017";

const router = express.Router();


router.get("/", (req, res) => 
{
    res.send("Hello, World!");
});


function getDocsCollection()
{
    const connection = mongodb.MongoClient.connect(connectionString);
    return connection.db("mddocs").collection("docs");
}

module.exports = router;
