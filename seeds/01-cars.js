
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {make: 'BMW', model: 'M3', year: 1998, MSRP: 20000},
        {make: 'BMW', model: 'M3', year: 1992, MSRP: 21211},
        {make: 'BMW', model: 'M3', year: 1994, MSRP: 12222},
        {make: 'BMW', model: 'M3', year: 1999, MSRP: 22222},
      ]);
    });
};
