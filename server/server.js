const express = require("express");
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const morgan = require("morgan");
const cors = require('cors');

const userRouter = require("./routes/userRouter");
const postRouter = require("./routes/postRouter");

const app = express();
const port = 3001;

app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(cors({ credentials: true, origin: true }));

const sessionParser = session({
  name: 'sid_socket',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
});


app.use(sessionParser);

app.use("/api/user", userRouter);
app.use('/api/post', postRouter);



app.listen(port, () => {
  console.log("Server is running on port", port);
});
