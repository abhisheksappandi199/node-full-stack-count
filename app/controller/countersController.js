const Counter = require('../model/counter')
//const { count } = require('../model/counter')

const countersController = {}

countersController.list = (req,res) =>{
    Counter.find()
    .then((counters)=>{
        res.json(counters)
    })
    .catch((err)=>{
        res.json(counters)
    })
}

countersController.create = (req,res) =>{
    // Counter.create({})
    const body = req.params.id
    const counter = new Counter(body)
    counter.save() // method called on an object 
    .then((counter)=>{
        res.json(counter)
    })
    .catch((err)=>{
        res.json(err)
    })
}

// const CounterUpdate = (_id, type) => {
    
// }

// skinny controller 
// fat models

countersController.update = (req,res) =>{
    const _id = req.params.id
    const type = req.query.type
    
 //   CounterUpdate(_id, type)
    Counter.updateByType(_id, type)
     .then((counter) => {
        res.json(counter)
     })
     .catch((err) => {
        res.json(err)
     })
}

countersController.destroy = (req,res) =>{
    const id = req.params.id
    Counter.findByIdAndDelete(id) // methods callled on a model is static method 
    .then((counter)=>{
        res.json(counter)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports = countersController