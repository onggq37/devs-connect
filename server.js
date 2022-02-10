const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connect to db
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

//Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
