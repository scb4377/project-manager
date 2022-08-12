const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/team", require("./routes/teamRoutes"));
app.use("/api/project", require("./routes/projectRoutes"));
app.use("/api/bugs", require("./routes/bugRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));
app.use("/api/logs", require("./routes/logRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
