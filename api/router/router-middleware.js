// validate 
// check if name taken 
// check if id exists
// error handling
const db = require('../data/db-config')

const validate = (req, res, next) => {
    const food = req.body
    if(!food.name || !food.purpose || !food.price || !food.delivers || !food.unhealthy || !food.heavy) {
        next({status: 422, message: 'please fill in all fields beb'})
    } else {
        next()
    }
}
const checkNameTaken = async (req, res, next) => {
    const name = await db('food').where('name', req.body.name).first()
    if(name) {
        next({status: 401, message: 'that food option should already be in there!'})
    } else {
        next()
    }
}
const checkIdExists = async (req, res, next) => {
    const [food] = await db('food').where('food_id', req.params.id)
    if(food) {
        req.food = food
        next()
    } else {
        next({status: 404, message: 'that id cannot be found beb!'})
    }
}
const errorHandling = (err, req, res, next) => {//eslint-disable-line
    res.status(err.status || 500).json({
        message: `${err.message}`,
    })
}

module.exports = {
    validate, 
    checkNameTaken,
    checkIdExists, 
    errorHandling,
}