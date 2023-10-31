## Node Js Crud 
### Api End Points
#### User Apis
- Register user : https://node-js-crud-ten.vercel.app/user/register
  - Method : POST
  - Required Fields (Payload): name,email,password
  
- Login user :https://node-js-crud-ten.vercel.app/user/login
  - Method : POST
  - Test Login : email : test@gmail.com , password:test@123

#### Book Apis
- Create Book : https://node-js-crud-ten.vercel.app/book/createBook
   - Method : POST
  - Required Fields (Payload): title,summary,authorName
  
- Edit Book :https://node-js-crud-ten.vercel.app/book/editBook
  - Method : POST
  - Required Fields (Payload): title,summary,authorName,bookId

- Get list of all Books of a user  :https://node-js-crud-ten.vercel.app/book/getbooks
  - Method : GET

- To get single Book data by its id  :https://node-js-crud-ten.vercel.app/book/getSinglebook
  - Method : POST
   - Required Fields (Payload): bookId

- Delete Book :https://node-js-crud-ten.vercel.app/book/delBook
  - Method : POST
   - Required Fields (Payload): bookId


