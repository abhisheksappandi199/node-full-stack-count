const mongoose = require('mongoose')

const configDB = () =>{
    mongoose.connect('mongodb://localhost:27017/full-stack',{useUnifiedTopology:true , useNewUrlParser:true})
    .then(()=>{
        console.log('connected to DB')
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = configDB