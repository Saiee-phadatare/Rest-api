const mouser = require("../model/user")

//get all user
async function handleGetAllUser(req,res){
    const aluser = await mouser.find({});
    return res.status(200).json(aluser);
}

//get by id
async function handleGetUserById(req,res){
    const user = await mouser.findById(req.params.id);
    if(!user) return res.status(404).json({err : "User not found.."});
    return res.json(user);
}

//patch by id (update)
async function handleUpdateUsreById (req,res){
    const user = await mouser.findByIdAndUpdate(req.params.id, req.body, {new : true, runValidators: true});
    if(!user) return res.status(404).json({"msg" : "user not found..."});
    return res.json({ message: "User updated successfully", user });
}

//delete by id
async function handleDeleteUserById(req,res){
    await mouser.findByIdAndDelete(req.params.id);
    return res.status(200).json({"msg" : "Record deleted..."});
}

//post (create/add new user)
async function handleCreateUser(req, res){
    const body = req.body;
    if(!body || !body.firstName || !body.lastName || !body.email || !body.gender){
        return res.status(400).json({msg : "Enter all fields..."});
    }
    
    //enter data to mongodb
    const result = await mouser.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        gender: body.gender,
    })

    //console.log(result);
    return res.status(200).json({msg : "Data Entred.."});
}

module.exports = {
    handleGetAllUser,
    handleGetUserById,
    handleUpdateUsreById,
    handleCreateUser,
    handleDeleteUserById
}