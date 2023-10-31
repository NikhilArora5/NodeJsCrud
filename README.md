## Node Js Crud 
### Api End Points
#### In the Below mentioned Endpoints i have mentioned the complete url to make a request to an api where the
  - Base url (Deployed server url) : https://node-js-crud-ten.vercel.app

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

#### Instructions to run locally
- Initially open the project root folder and run
  - npm install : to install required node modules/packages to run the app
- PORT used :8081
- Base url to be used for APi endpoints: http://localhost:8081
  - Example Register User Api  endpoint is  /user/register
  - Base url http://localhost:8081 
  - To make a request complete url will be http://localhost:8081/user/register

#### Assumptions/Decision
- I have tried to complete assignment as per the given instructions
- Please refer to the below Points which i have consider as per the given instructions to complete the assignment
  - User has to first register and then login using the credentials
  - user Authentication is setup in order to view/add/delete books in relation to a user
  - So with each created book a reference of userId is made to the logged in user.
  - Also a token is required to be passed in header/cookies for user validation in book Apis.

#### Deployed server url
- https://node-js-crud-ten.vercel.app

#### Github Repository Link
- https://github.com/NikhilArora5/NodeJsCrud

#### Github Profile
- https://github.com/NikhilArora5/

#### Portfolio 
- https://nikhilarora-protfolio.netlify.app/





