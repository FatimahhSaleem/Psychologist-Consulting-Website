const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/Psychologist-Consulting-Website";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);

    console.log("Conneted to Mongo-DB Successfully.");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectToMongo;
