const express = require("express");
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const cors = require('cors')
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

app.listen(port, () => console.log(`Server started on port ${port}`));
