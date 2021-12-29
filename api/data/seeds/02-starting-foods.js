
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('food').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {name: 'Noodles and Company', purpose: 'meal', price: 2, delivers: 'yes', unhealthy: false, heavy: true},
        {name: 'Crumble', purpose: 'dessert', price: 3, delivers: 'no', unhealthy: true, heavy: true},
        {name: 'Starbucks', purpose: 'coffee', price: 3, delivers: 'yes', unhealthy: false, heavy: false}
      ]);
    });
};
