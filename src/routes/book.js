const express=require("express")
const router=express.Router()


const {createBook,editBook,delBook,getUserbooks}=require("../controllers/bookController")
const {verifyUser}=require("../middleware/auth")



router.post("/createBook",verifyUser,createBook)
router.post("/editBook",verifyUser,editBook)
router.get("/getbooks",verifyUser,getUserbooks)
router.post("/delBook",verifyUser,delBook)

module.exports=router