
exports.up = function(knex) {
  // change we want to make to our schema
  return knex.schema.createTable('cars', tbl =>{
  	tbl.increments()
  	tbl.text('make', 128)
  		.notNullable()
  	tbl.text('model', 128)
  		.notNullable()
  	tbl.decimal('MSRP')
  		.notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
