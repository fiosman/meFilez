const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = require("./config/keys").mongoURI;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const users = require("./api/routes/users");
const files = require("./api/routes/files");
const passport = require("passport");
require("./config/passport")(passport);
require("dotenv").config();

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => app.listen(process.env.port || 5000))
  .catch((err) => console.log(err));

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(cookieParser());

app.use(bodyParser.json());

app.use((req, res, next) => {
  const authHeader = req.cookies.jwt;
  if (authHeader) {
    req.headers.authorization = `Bearer ${authHeader}`;
  }
  next();
});

app.use(passport.initialize());

app.use("/api/users", users);
app.use("/api/files", files);
