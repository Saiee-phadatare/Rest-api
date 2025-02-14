const express = require("express");

const {connectmongodb} = require("./connection");
const {logReqRes} = require("./middleware")
const userRouter = require("./routes/user");

const app = express();
let PORT = 4000;

//connection
connectmongodb("mongodb://127.0.0.1:27017/node_connecion")
.then((()=>{console.log("Mongodb connected...")}));
                               
//middleware
app.use(express.urlencoded({extended :false}));
app.use(logReqRes("log.txt"));

//Router
app.use('/info/users', userRouter);

app.listen(PORT , ()=>{console.log(`Server started at port : ${PORT}....`)});
