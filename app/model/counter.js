const mongoose = require('mongoose')
const Schema = mongoose.Schema

const counterSchema = new Schema({
    count : {
        type : Number ,
        default : 0 
    }
})


// Refactoring 
// dry - Dont' repeat yourself
// static method
counterSchema.statics.updateByType = function(_id, type){
    const Counter = this 
    if(type === 'up') {
        return Counter.findByIdAndUpdate(_id , {$inc : { count : 1}} ,{ new :true}) 
    } else if(type === 'down'){
        return Counter.findByIdAndUpdate(_id , {$inc : { count : -1}} ,{ new :true})
    }else if(type === 'reset'){
        return Counter.findByIdAndUpdate(_id , {$set : { count : 0}} ,{ new :true})

    }
}

const Counter = mongoose.model('Counter',counterSchema)

module.exports = Counter