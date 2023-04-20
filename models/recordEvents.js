require("../db/db_conn");
const mongoose = require("mongoose");

const recordEventSchema = mongoose.Schema({
    event: {}
});

const RecordEvent = new mongoose.model("RecordEvent", recordEventSchema);

module.exports = {
    RecordEvent
}