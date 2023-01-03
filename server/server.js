const express=require('express') //to build the api
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

// Middleware
const bodyParser=require('body-parser')
const cors = require('cors') //provides middleware for express to enable CORS with options

var corsOptions={
    origin:"http://localhost:5000" //this is the BE Server. may need to change
}

const db = require("./models");

// //Testing the connection to the db
// connect
//   .authenticate()
//   .then(() => console.log`From server.js, Database connected ...`)
//   .catch((err) => console.log("Error" + err));

// Syncing the database
db.sequelize.sync({})
  .then(() => {
    console.log("Resume database is synced from server.js");
  })
  .catch((err) => {
    console.log("Databse is not synced: " + err.message);
  });
  
app.use(cors(corsOptions));

app.use(express.urlencoded({extended:true}));

app.get("/", (req, res)=> {
    res.json({message: "Welcome to Tammys Resume"})
})

app.listen(PORT, () => {
  console.log(`Server is burnin' on ${PORT}`);
});

