exports.up = function(knex, Promise) {
    return knex.schema.createTable("users", (t) => {
        //column "id"
        t.increments()
            .index();

        //column "username"
        t.string("username", 15)
            .unique()
            .notNullable()
            .index();

        //column "created_at"
        t.timestamp("created_at")
            .notNullable()
            .defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return knex.shema.dropTable("users");
};