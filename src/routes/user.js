const express=require("express")
const router=express.Router()

const {register,login}=require("../controllers/userController")



router.post("/register", register
)

// router.get("/", verifyUser,getData)

// router.post("/upload", upload)


router.post("/login",login
)

// router.post("/logout",logout)

module.exports=router