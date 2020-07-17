
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_recipes_favorites').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_recipes_favorites').insert([
        {id: 1, user_id: 1, recipe_id: 1 },
        {id: 2, user_id: 1, recipe_id: 2 },
      ]);
    });
};
