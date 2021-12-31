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
            res.status(200).json(all)
        })
        .catch(err => {
            next(err)
        })
})

router.get('/:id', checkIdExists, (req, res, next) => {
    res.status(200).json(req.food)
})

router.post('/', validate, checkNameTaken, (req, res, next) => {
    Food.create(req.body)
        .then(newFood => {
            console.log(newFood)
            res.status(201).json({message: 'new food created woo!'})
        })
        .catch(err => {
            next(err)
        })
})

router.put('/:id', checkIdExists, (req, res, next) => {
    Food.editById(req.params.id, req.body)
        .then(updatedFood => {
            res.json(updatedFood)
        })
        .catch (err => {
            next(err)
        })
})

router.delete('/:id', checkIdExists, (req, res, next) => {
    Food.deleteById(req.params.id)
        .then(deleted => {
            res.status(200).json(deleted)
        })
        .catch(err => {
            next(err)
        })
})

router.use(errorHandling)
module.exports = router