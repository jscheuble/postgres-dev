
exports.up = function (knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.string('username').notNullable().unique();
        tbl.string('password').notNullable();
    })
        .createTable('post', tbl => {
            tbl.increments();
            tbl.string('status').notNullable();
            tbl.timestamp('created at').defaultTo(knex.fn.now());
            tbl.integer('user_id')
                .unsigned()
                .notNullable()
                .references('users.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('post').dropTableIfExists('users');
};
