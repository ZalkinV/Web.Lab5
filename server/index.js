const express = require("express");
const path = require("path");
const app = express();

const clientPath = path.join(__dirname, "../client");

app.use(express.static(clientPath));

app.listen(808, () => { console.log("Server has been started!") })
