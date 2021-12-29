// get all 
// get by id
// create new food
// edit food by id
// delete by id

const db = require('../data/db-config')

function getAll() {
    return db('food')
}
async function getById(id) {
    const rows = await db('food').where('food_id', id).first()
    return rows
}
async function create(food) {
    const [newFood] = await db('food').insert(food, ['food_id', 'name', 'purpose', 'price', 'delivers', 'unhealthy', 'heavy'])
    return newFood
}
async function editById(id, changes) {
    const [updated] = await db('food').where('food_id', id).update(changes, ['food_id', 'name', 'purpose', 'price', 'delivers', 'unhealthy', 'heavy'])
    return updated
}
function deleteById(id) {
    return db('food').where('food_id', id).del()
}


module.exports ={
    getAll, 
    getById,
    create,
    editById,
    deleteById,
}