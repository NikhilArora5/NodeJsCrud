const express=require("express")
var morgan = require('morgan')

const app=express()
const cookieParser = require("cookie-parser");
const cors=require("cors")
app.use(cors( {origin: "*",credentials: true,}))
const connectDB=require("./config/database")
const PORT=8081
require('dotenv').config();
connectDB()
morgan.token('id', function getId (req) {
  return req.id
})
app.use(morgan(':id :method :url :response-time :status'))
   
// for req,body
app.use(express.json());
// for req.body url-form-encoded
app.use(express.urlencoded({ extended: true }));

// for cookies
app.use(cookieParser());

const userRouter=require("./src/routes/user")
const bookRouter=require("./src/routes/book")





app.use("/user/",userRouter)
app.use("/book/",bookRouter)
app.get("/",(req,res)=>{
    res.send("Hello Deployed")
  })

app.listen(PORT,(err)=>{
    if(err){
        console.log("server error")
    }else{

        console.log(`Server Running  ✔️   on http://localhost:${PORT}/`)
    }
})