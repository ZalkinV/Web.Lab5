const express = require("express");
const mongodb = require("mongodb");


const connectionString = "mongodb://localhost:27017";

const router = express.Router();


router.get("/", (req, res) => 
{
    res.send("Hello, World!");
});


async function getDocsCollection()
{
    const client = await mongodb.MongoClient.connect(connectionString, { useNewUrlParser: true });
    return client.db("mddocs").collection("docs");
}

module.exports = router;
