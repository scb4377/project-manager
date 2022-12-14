const express = require("express");
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const cors = require('cors')
const path = require("path")
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser())
app.use(cors())

app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/teams", require("./routes/teamRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/bugs", require("./routes/bugRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));
app.use("/api/logs", require("./routes/logRoutes"));

app.use(errorHandler);

// Serve client
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "./frontend/build")));
  
    app.get("*", (req, res) =>
      res.sendFile(
        path.resolve(__dirname, "./", "frontend", "build", "index.html")
      )
    );
  } else {
    app.get("/", (req, res) => res.send("Please set to production"));
  }

app.listen(port, () => console.log(`Server started on port ${port}`));
