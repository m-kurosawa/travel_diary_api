exports.up = function(knex) {
    return knex.schema.createTable("diaries", (t) => {
        //column "id"
        t.increments()
            .index();

        //column "userId"
        t.integer("userId")
            .notNullable()
            .index();
        //column "diary"
        t.text("diary")
            .notNullable();

        //column "updatedAt"
        t.timestamp("updatedAt")
            .notNullable()
            .defaultTo(knex.fn.now());

        //column "createdAt"
        t.timestamp("createdAt")
            .notNullable()
            .defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("diaries");
};