const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const routes = require("./controllers");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// routes
app.use(require("./controllers/api"))
app.use(require("./controllers/"))

app.use("/", routes);



// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/trail", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});