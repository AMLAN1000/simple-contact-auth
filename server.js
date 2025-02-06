const dotenv = require("dotenv");
dotenv.config(); // Load environment variables
const errorHandler = require("./middleware/errorHandler");

console.log("PORT:", process.env.PORT);
console.log("CONNECTION_STRING:", process.env.CONNECTION_STRING); // Debugging

const express = require("express");
const connectDB = require("./config/dbConnection");
connectDB(); // Connect to MongoDB

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoute"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler); // Error handler middleware

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
