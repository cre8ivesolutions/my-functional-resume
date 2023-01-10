require("dotenv").config();
const express = require("express"); //to build the api
const app = express();

//This is the db connection 
const pool = require("./db");

//Middleware
const cors = require("cors"); //provides middleware for express to enable CORS with options

// const router = require('express').Router();
// const userRouter = require("./controllers/userController");

app.use(cors());
app.use(express.json());

// Test route to see if the route is working
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Tammys Resume" });
});

// Create a user //this is working
app.post("/users", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await pool.query(
      "INSERT INTO users (name, email, password) VALUES($1, $2, $3)",
      [name, email, password]
    );

    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message + " error in pern code");
  }
});

// Contact me //This is working
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = await pool.query(
      "INSERT INTO users (name, email, message) VALUES($1, $2, $3)",
      [name, email, message]
    );
    res.json(`Message submitted ${JSON.stringify(newMessage)}`);

  } catch (err) {
    console.error(err.message + " error submitting message");
  }
});


//Get all users // This is working; console.log = key/value as objects
app.get("/users", async (req, res) => {
  try {

    const allUsers = await pool.query("SELECT * FROM users");
    
    res.json(allUsers.rows);

    console.log(`allUsers = ${allUsers.rows}`)
  
  } catch (err) {
    console.error(err.message);
  }
});


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

// Delete a user // this is working
app.delete("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query("DELETE FROM users WHERE user_id = $1", [
      id
    ]);
    res.json("User was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

//update a users email address // this is not working
app.put("/user/:id", async (req, res) => {
  try {
  //this pgAdmin query works UPDATE users SET email = 'pgemail@email.com' WHERE user_id = 1 RETURNING *;
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
  
    // app.use("/api/users", userRouter);
  
  app.listen(5001, () => {
    console.log(`1. Server is workin' on 5001`);
  });
  