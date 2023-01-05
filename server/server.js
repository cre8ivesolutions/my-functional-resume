require("dotenv").config();
const express = require("express"); //to build the api
const app = express();

//This is the db connection 
const pool = require("./db");

//Middleware
const cors = require("cors"); //provides middleware for express to enable CORS with options

// const router = require('express').Router();
// const userRouter = require("./controllers/userController");

// const PORT = 5001;

// var corsOptions={
//     origin:"http://localhost:5000" //this is the BE Server. may need to change
// }

// app.use(cors(corsOptions)); // use if there are cors errors

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({extended:true}));

// Syncing the database
// pool.sequelize
//   .sync({ alter: true })
//   .then(() => {
//     console.log("3. Resume database is synced from server.js");
//   })
//   .catch((err) => {
//     console.log("Databse is not synced: " + err.message);
//   });

// Test route to see if the route is working
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Tammys Resume" });
});

// Create user //this is working back and forth
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


//Get all users // This is working it will console.log key/value as objects
app.get("/users", async (req, res) => {
  try {

    const allUsers = await pool.query("SELECT * FROM users");
    
    res.json(allUsers.rows);

    console.log(`allUsers = ${allUsers.rows}`)
  
  } catch (err) {
    console.error(err.message);
  }
});

// app.use("/api/users", userRouter);

// Get one user by id //this is working 
app.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [
      id
    ]);

    res.json(user.rows[0]);
    console.log(`user.rows[0] = ${user.rows[0]}`)
  } catch (err) {
    console.error(`user/:id err.message = ${err.message}`);
  }
});

//update a users email address // this is not working
app.put("/user/:id", async (req, res) => {
  try {

    //this query works UPDATE users SET email = 'pgemail@email.com' WHERE user_id = 1 RETURNING *;
    const { user_id } = req.params;
    const { newEmail } = req.body;
    const updateEmail = await pool.query(
      "UPDATE users SET email = $1 WHERE user_id = $2",
      [newEmail, user_id]
      );
      
      res.json(updateEmail);
      console.log(`new email for user id = ${updateEmail}`)
    } catch (err) {
      console.error(err.message);
  }
});



app.listen(5001, () => {
  console.log(`1. Server is workin' on 5001`);
});
