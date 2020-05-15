
exports.seed = function (knex) {
  return knex('users').insert([
    {
      username: 'jane',
      password: 'doe'
    },
    {
      username: 'john',
      password: 'doe'
    }
  ])
};
