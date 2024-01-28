const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
connectToMongo();
const app = express();
const port = 5000;

//using cors
app.use(cors());
//if you want to use the body of request use a middle-ware:
app.use(express.json());
//and set the  header content-type as json

// Available Routes:
app.get("/", (req, res) => {
  res.send("Welcome to Psychologist-Consulting-Website backend!");
});

app.use("/patient", require("./routes/patient"));
app.use("/psychologist", require("./routes/psychologist"));
// app.use("/appointment", require("./routes/appointment"));

app.listen(port, () => {
  console.log(
    `Psychologist-Consulting-Website backend listening at http://localhost:${port}`
  );
});
