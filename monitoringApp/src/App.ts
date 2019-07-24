// lib/app.ts
import bodyParser = require("body-parser");
import cors = require("cors");
import express = require("express");
import session = require("express-session");

// Create a new express application instance
const app: express.Application = express();

// Constants
const PORT = process.env.PORT || 8082;

// My controller
import routes from "./routes/index";

// Implement CORS
app.use(cors());

// Session
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: process.env._SECRET_SESSION || "Node kafka by Maissacrement"
  })
);

// Function

// Cors config
const header = (_: any, res: any, next: any) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
};

const listen = () => {
  process.stdout.write(`Listening on port ${PORT}!\n`);
};

// SET HEADER
app.use(header);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Path connection
app.use(routes);

app.listen(PORT, listen);
