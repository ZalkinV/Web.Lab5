const express = require("express");
const path = require("path");
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cors());

const mddocs = require("./mddocs");
app.use("/api/mddocs", mddocs);

app.listen(808, () => { console.log("Server has been started!") })
