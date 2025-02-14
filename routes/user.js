const express = require("express");
const {handleGetAllUser, handleGetUserById,handleUpdateUsreById,handleCreateUser,handleDeleteUserById} = require("../controller/user")

const router = express.Router();

// app.get('/', (req,res)=>{
//     return res.end("Welcome to my server....");
// })

router//instead of app we used router
.route('/')
.get(handleGetAllUser)
.post(handleCreateUser)

router
.route('/:id')
.get(handleGetUserById)
.delete(handleDeleteUserById)
.patch(handleUpdateUsreById);

module.exports = router;