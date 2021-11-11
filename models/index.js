module.exports = function(knex) {
    return {
        users: require("./users")(knex),
        diaries: require("./diaries")(knex),
    };
};