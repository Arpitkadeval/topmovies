const router = require("./src/router/route");
const db = require("./src/db/db.config");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3003;
app.use(cors());
app.use(express.json());
mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false})
.then(() =>{
      console.log("successfully connected");
}).catch((e) =>{
   console.log("Connection error", e);
});
app.use(router);
app.listen(port, () =>{
   console.log(`Connected at port ${port}`)
});