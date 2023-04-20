const mongoose = require("mongoose");

(
    async () => {
        try {

            const conn_string = process.env.MONGO_CONN_STRING ?? "";

            if (!conn_string) throw new Error("Please provide mongodb connection string...");

            await mongoose.connect(process.env.MONGO_CONN_STRING, {
                connectTimeoutMS: 10000
            });

            console.log("connected to db...");

        } catch (err) {
            console.log("Error: ", err);
        }
    }
)();