//env setup
require("dotenv").config();
const Utils = require("./utils/utils");

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const index = require('./Routes');
const doctor = require("./Routes/doctor");
const path = require('path');

//middleware
app.use(express.static(path.join(__dirname, 'public')));

//use route
app.use("/",index);
app.use("/doctor", doctor);

//init
async function init() {
  try {
    //connect mongodb
    await mongoose.connect(`${Utils.config.mongoURL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex:true
    });

    console.log("mongodb connected");

    //start server
    app.listen(Utils.config.serverPort, (err) => {
      console.log(`server started at port ${Utils.config.serverPort}`);
    });

    Utils.readFile();
  } catch (err) {
    console.log(err);
    return;
  }
}


// program entry 
init();
