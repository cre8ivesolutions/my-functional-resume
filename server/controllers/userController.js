const router = require("express").Router();
// const User = require("../models/user");
const pool = require("..")
const Sequelize = require('sequelize');

//get one user by :id
router.get("/:id", async (req, res)=> {
  const id = req.params.id;
  try {
   
    // console.log(`this works`)
    //Testing the pool to the db //this works, if needed
sequelize.authenticate()
console.log(`2. Database connected with PG_URI at userController...`)
//   .catch((err) => console.log("Error" + err));
    // await db.User.findAll({
    //   where: {
    //     id: {id}
    //   }
    // }
    // );
    res.status(200).json(`found user id ${id}`);
  } catch (err){
    res.status(500).json({message: `Error getting user ${id}`})
  }
})

//create a user
router.post ("/", async (req, res) => { 
  try {
  const {password} = req.body;
  const newUser = await pool.query(
    "INSERT INTO users (password) VALUES ($1) RETURNING *", [password]
  );
  res.json(newUser.rows[0]);
} catch (err) {
  console.error(err.message);
}
})
  // const {name, email, password }= req.body;
//   try{
//   await User.create({
//     name: name,
//     email: email,
//     password: password
//   })
//   res.send({statusCode: 200, message: `User = ${user.name} was created`})
// } catch (err){
//   res.status(500).json({message: `Cannot create user ${user}`})
// }
// })



// Create a new user
// exports.create = (req, res) => {
//   if (!req.body.password) {
//     res.status(400).send({
//       message: "password can not be empty!",
//     });
//     return;
//   }

//   const newUser = {
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//   };

//   User.create(newUser)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || "There was an error creating a new User",
//       });
//     });
// };

//Get all users
// exports.findAll = (req, res) => {
//   const title = req.query.title;
//   var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

//   User.findAll({})
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || "There was an error retrieving all users.",
//       });
//     });
// };

// Update a user by id
// exports.update = (req, res) => {
//   const id = req.params.id;

//   User.update(req.body, {
//     where: { id: id },
//   })
//     .then((num) => {
//       if (num == 1) {
//         res.send({
//           message: "User was updated successfully.",
//         });
//       } else {
//         res.send({
//           message: `Cannot update User id=${id}. Either User was not found or req.body is empty`,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || "Error updating User with id=" + id,
//       });
//     });
// };
// Delete a user by id
// exports.delete = (req, res) => {
//   const id = req.params.id;

//   User.destroy({
//     where: { id: id },
//   })
//     .then((num) => {
//       if (num == 1) {
//         res.send({
//           message: "User was deleted successfully!",
//         });
//       } else {
//         res.send({
//           message: `Cannot delete User with id=${id}. Maybe User was not found`,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || "Could not delete User with id=" + id,
//       });
//     });
// };
module.exports = router;