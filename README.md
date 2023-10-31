## Node Js Crud 
### Api End Points
#### User Apis
- Register user : https://node-js-crud-ten.vercel.app/user/register
  - Method : POST
  - Required Fields (Payload): name,email,password
  
- Login user :https://node-js-crud-ten.vercel.app/user/login
  - Method : POST
  - Test Login : email : test@gmail.com , password:test@123
  - In response we get token from this api which is to be passed via cookies or header in token field in the Book Apis for user validation

#### Book Apis
- Create Book : https://node-js-crud-ten.vercel.app/book/createBook
   - Method : POST
  - Required Fields (Payload): title,summary,authorName
  - token  received in user login Api is required to be passed via  cookies/headers in token field for user validation
  
- Edit Book :https://node-js-crud-ten.vercel.app/book/editBook
  - Method : POST
  - Required Fields (Payload): title,summary,authorName,bookId
  - token  received in user login Api is required to be passed via  cookies/headers in token field for user validation
  

- Get list of all Books of a user  :https://node-js-crud-ten.vercel.app/book/getbooks
  - Method : GET
  - token  received in user login Api is required to be passed via  cookies/headers in token field for user validation

- To get single Book data by its id  :https://node-js-crud-ten.vercel.app/book/getSinglebook
  - Method : POST
   - Required Fields (Payload): bookId
   - token  received in user login Api is required to be passed via  cookies/headers in token field for user validation

- Delete Book :https://node-js-crud-ten.vercel.app/book/delBook
  - Method : POST
   - Required Fields (Payload): bookId
   - token  received in user login Api is required to be passed via  cookies/headers in token field for user validation


