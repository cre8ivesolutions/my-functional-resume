require("dotenv").config();
const express = require("express"); //to build the api
const app = express();
const pool = require("./db");
const cors = require("cors"); //provides middleware for express to enable CORS with options
// const router = require('express').Router();
// const PORT = 5001;

// const connection = require("./db");
// const userRouter = require("./controllers/userController");

// Middleware

// var corsOptions={
//     origin:"http://localhost:5000" //this is the BE Server. may need to change
// }

// app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({extended:true}));

// Syncing the database
// connection.sequelize
//   .sync({ alter: true })
//   .then(() => {
//     console.log("3. Resume database is synced from server.js");
//   })
//   .catch((err) => {
//     console.log("Databse is not synced: " + err.message);
//   });

app.post("/users", async (req, res) => {
  try {
    const { password } = req.body;
    const newUser = await pool.query(
      "INSERT INTO users (password) VALUES($1) RETURNING *",
      [password]
    );

    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message + "error in pern code");
  }
});

app.get("/users", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");
    res.json(allUsers.rows);
    console.log(`allUsers = ${allUsers.rows}`)
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Tammys Resume" });
});

// app.use("/api/users", userRouter);

app.listen(5001, () => {
  console.log(`1. Server is workin' on 5001`);
});
