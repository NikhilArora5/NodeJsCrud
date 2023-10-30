const express=require("express")
const router=express.Router()


const {createBook,editBook,delBook,getbook}=require("../controllers/bookController")
const {verifyUser}=require("../middleware/auth")



router.post("/createBook",verifyUser,createBook)
router.post("/editBook",verifyUser,editBook)
router.get("/getbooks",verifyUser,getbook)
router.post("/delBook",verifyUser,delBook)

module.exports=router