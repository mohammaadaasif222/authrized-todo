const express = require("express");
const fs = require("fs");
const ejs = require('ejs');
const routes = require('./routes/student')
const authRoutes = require('./routes/auth')
const todosRouter = require('./routes/todosRoutes');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();

const app = express();
mongoose.set('strictQuery', true)
mongoose
  .connect(process.env.DATABASE_CLOUD)
  .then(() => console.log('DB connected'))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cors('origin',"*"));

app.use('/', routes)
app.use('/',authRoutes);
app.use('/', todosRouter)




app.set('view engine', 'ejs');


app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}/`);
});
