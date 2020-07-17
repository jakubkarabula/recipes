
exports.up = function(knex) {
  return knex.schema.createTable('user_recipes_favorites', function(table) {
    table.increments('id');
    table.integer('user_id').unsigned().notNullable()
    table.integer('recipe_id').unsigned().notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

    table.foreign('user_id').references('users.id').onDelete('CASCADE')
    table.foreign('recipe_id').references('recipes.id').onDelete('CASCADE')

    table.unique(['user_id', 'recipe_id'])
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_recipes_favorites');
};
