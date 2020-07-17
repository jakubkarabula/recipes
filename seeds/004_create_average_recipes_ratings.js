
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('average_recipes_ratings').del()
    .then(function () {
      // Inserts seed entries
      return knex('average_recipes_ratings').insert([
        {id: 1, recipe_id: 1, average_rating: 4.0 },
        {id: 2, recipe_id: 2, average_rating: 5.0 },
      ]);
    });
};
