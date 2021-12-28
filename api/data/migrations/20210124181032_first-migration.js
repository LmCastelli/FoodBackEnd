exports.up = async (knex) => {
  await knex.schema
    .createTable('food', (food) => {
      food.increments('food_id')
      food.string('name', 100).notNullable().unique()
      food.integer('price', 5).notNullable().unsigned()
      food.string('delivers', 10).notNullable()
      food.boolean('healthy').notNullable()
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('users')
}
