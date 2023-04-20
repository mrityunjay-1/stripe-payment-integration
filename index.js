const express = require("express");
const cors = require("cors");
require("dotenv").config();

const server = express();

const { RecordEvent } = require("./models/recordEvents");

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

server.get("/", (_, res) => {
    res.status(200).send({ message: "stripe payment integration" });
});

server.post("/stripe-webhook", async (req, res) => {
    try {

        console.log("req.body: ", req.body);

        const re = new RecordEvent({event: req.body});

        await re.save();

    } catch (err) {
        console.log("Error: ", err);
    }
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log("server is up and running on port: ", PORT);
});