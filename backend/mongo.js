const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mohammad88:mohammad784@blog.i34ee.mongodb.net/?retryWrites=true&w=majority').then(()=>{
console.log("connected");
}).catch((error)=>{
console.log("faild to connect");
})