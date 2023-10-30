const bookDb=require("../model/book")
const userDb=require("../model/book")




const createBook = async (req, res) => {
  try {
    console.log("-body-", req.body);
    let { title, summary,authorName } = req.body;

    let userLogged=req.userLogged
    console.log("userLogged",userLogged)
    let userId=userLogged._id

    if (!title || !summary || !authorName) {
      return res.status(400).json({
        status: 400,
        message: "Please fill all fields",
        data: {},
      });
    }

    let bookSaved = await bookDb.create({
      title,
      summary,
      userId,
      authorName
    });

    // let token=await genToken(bookSaved._id)

    if (bookSaved) {
      console.log("book saved");
      return res.status(200).json({
        status: 200,
        message: "book created succesfully",
        data: {},
      });
    }else{
        return res.status(400).json({
            status: 400,
            message: "something went wrong",
            data: {},
          });

    }
  } catch (error) {

    return res.status(400).json({
        status: 400,
        message: error.message,
        data: {},
      });
  }
};

const delBook=async(req,res)=>{

    try {
     let {bookId}=req.body
 
     console.log("BODY",req.body)
    //  let clientLogged=req.clientLogged
    
    
    // let del= await bookDb.findByIdAndUpdate({_id:bookId},{isDeleted:true})
    let del= await bookDb.findByIdAndDelete({_id:bookId})
    console.log("BODY del--------")
     if(del){
         return res.status(200).json({
             status:200,
             message:'book deleted succesfully',
             data:{}
         })
     }else{
        return res.status(400).json({
            status:200,
            message:'No such book exist',
            data:{}
        })

     }
    } catch (error) {
     return res.status(400).json({
         status:400,
         message:error.message,
         data:{}
     })
    }
 
 }

 
const editBook=async(req,res)=>{

    try {
     let {bookId}=req.body
 
     let changes=req.body
 
     console.log("BODY",req.body)
    
     let bookSaved= await bookDb.findOneAndUpdate({_id:bookId },changes)
     console.log("userExist check33",bookSaved)
     if(bookSaved){
         console.log("userExist check4444")
         return res.status(200).json({
             status:200,
             message:'book updated succesfully',
             data:{}
         })
     }
    } catch (error) {
     return res.status(400).json({
         status:400,
         message:error.message,
         data:{}
     })
    }
 
 }

 const getUserbooks=async(req,res)=>{

    try {
    //  let {userId}=req.body
    let userLogged= req.userLogged
    let userId=userLogged._id
    console.log("--------userLogged-----",userLogged)
     console.log("BODY",req.body)
     let clientLogged=req.clientLogged
     if(!userId){
         return res.status(400).json({
             status:400,
             message:'Please fill required fields',
             data:{}
         })
     }
    
     let userExists=userDb.findOne({_id:userId,isDeleted:false})
 
     if(!userExists){
         return res.status(400).json({
             status:400,
             message:'No such user Exist',
             data:{}
         })
     }
    
     let bookS= await bookDb.find({userId:userId,isDeleted:false})
 
     if(bookS){
         return res.status(200).json({
             status:200,
             message:'books fetched succesfully',
             data:bookS
         })
     }
    } catch (error) {
     return res.status(400).json({
         status:400,
         message:error.message,
         data:{}
     })
    }
 
 }
 const getSinglebook=async(req,res)=>{

    try {
    let {bookId}=req.body
    let userLogged= req.userLogged
    let userId=userLogged._id
    console.log("--------userLogged-----",userLogged)
     console.log("BODY",req.body)
     if(!userId){
         return res.status(400).json({
             status:400,
             message:'Please fill required fields',
             data:{}
         })
     }
    
     let userExists=userDb.findOne({_id:userId,isDeleted:false,})
 
     if(!userExists){
         return res.status(400).json({
             status:400,
             message:'No such user Exist',
             data:{}
         })
     }
    
     let book= await bookDb.find({userId:userId,isDeleted:false,_id:bookId})
 
     if(book){
         return res.status(200).json({
             status:200,
             message:'book data succesfully',
             data:book
         })
     }
    } catch (error) {
     return res.status(400).json({
         status:400,
         message:error.message,
         data:{}
     })
    }
 
 }

 module.exports={
    createBook,editBook,delBook,getUserbooks,getSinglebook
 }