
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'test@hellofresh.com', password: 'test'},
        {id: 2, email: 'john@hellofresh.com', password: 'test'}
      ]);
    });
};
