
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_recipes_ratings').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_recipes_ratings').insert([
        {id: 1, user_id: 1, recipe_id: 1, rating: 4 },
        {id: 2, user_id: 1, recipe_id: 2, rating: 5 },
        {id: 3, user_id: 2, recipe_id: 2, rating: 4 },
      ]);
    });
};
