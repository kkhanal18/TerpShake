const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const auth = require("./routes/api/auth");

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
const PORT = process.env.PORT || 5000;

// Define routes
app.get("/", (req, res) => res.send("API Running"));

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/auth", auth);

app.use("/api/posts", posts);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
