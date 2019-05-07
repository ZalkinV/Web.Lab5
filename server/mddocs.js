const express = require("express");
const mongodb = require("mongodb");


const connectionString = "mongodb://localhost:27017";

const router = express.Router();


router.get("/", async (req, res) => 
{
    const docs = await getDocsCollection();
    res.send(await docs.find({}).toArray());
});

router.post("/", async (req, res) =>
{
    const docs = await getDocsCollection();
    await docs.insertOne(
        {
            name: req.body.name,
            text: req.body.text
        });
    res.status(201).send();
});

router.post("/:id", async (req, res) =>
{
    const docs = await getDocsCollection();
    await docs.updateOne(
        {_id : new mongodb.ObjectID(req.params.id)},
        {
            $set:
            {
                text: req.body.text,
            }
        });
    res.status(201).send();
});

router.delete("/:id", async (req, res) =>
{
    const docs = await getDocsCollection();
    await docs.deleteOne({_id : new mongodb.ObjectID(req.params.id)})
    res.status(200).send();
});


async function getDocsCollection()
{
    const client = await mongodb.MongoClient.connect(connectionString, { useNewUrlParser: true });
    return client.db("mddocs").collection("docs");
}

module.exports = router;
