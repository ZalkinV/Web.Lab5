const express = require("express");
const path = require("path");
const app = express();


app.use(express.json());

const mddocs = require("./mddocs");
app.use("/api/mddocs", mddocs);

app.listen(808, () => { console.log("Server has been started!") })
