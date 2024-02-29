const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://ankit17110747:Pp79RBrWqR1CD6l4@cluster0.fxz60om.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};
module.exports = connect;
