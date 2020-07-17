
exports.up = function(knex) {
  return knex.schema.createTable('recipes', function(table) {
    table.increments('id');
    table.string('name').notNullable();
    table.string('headline').notNullable();
    table.string('image').notNullable();
    table.string('calories').notNullable();
    table.string('time').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('recipes');
};
