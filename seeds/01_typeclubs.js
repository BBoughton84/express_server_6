
exports.seed = function(knex, Promise) {
  return knex('clubs').del()
    .then(function () {
      return knex('clubs').insert([
        {
          brand: 'TaylorMade',
          type: 'Wood',
          number:  1
        },
        {
          brand: 'Ping',
          type: 'Iron',
          number: 5
        },
        {
          brand: 'Mizuno',
          type: 'Wedge',
          number: 60 
        }
      ]);
    });
};
