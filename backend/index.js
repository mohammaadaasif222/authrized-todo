const express = require("express");
const fs = require("fs");
const ejs = require('ejs');
const port = 9000;
const routes = require('./routes/student')
const signInRouter = require('./routes/signinRoutes');
const signUpRouter = require('./routes/signupRoutes');
const todosRouter = require('./routes/todosRoutes');
const cors = require('cors')

const app = express();


app.use(express.json());
app.use(cors('origin',"*"));

app.use('/', routes)
app.use('/',signInRouter);
app.use('/',signUpRouter);
app.use('/', todosRouter)




app.set('view engine', 'ejs');



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
