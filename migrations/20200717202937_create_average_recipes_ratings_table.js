
exports.up = function(knex) {
  return knex.schema.createTable('average_recipes_ratings', function(table) {
    table.increments('id');
    table.integer('recipe_id').unsigned().notNullable()
    table.float('average_rating').unsigned()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

    table.foreign('recipe_id').references('recipes.id').onDelete('CASCADE')

    table.unique('recipe_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('average_recipes_ratings');
};
