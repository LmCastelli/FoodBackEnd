// get all 
// get by id 
// post new
// put by id 
// del by id

const router = require('express').Router()

const Food = require('./router-model')

const { validate, checkIdExists, checkNameTaken, errorHandling} = require('./router-middleware')


router.get('/all', (req, res, next) => {
    Food.getAll()
        .then(all => {
            console.log(all)
            res.status(200).json(all)
        })
        .catch(err => {
            next(err)
        })
})

router.get('/all/:id', checkIdExists, (req, res, next) => {
    res.status(200).json(req.food)
})

router.use(errorHandling)
module.exports = router