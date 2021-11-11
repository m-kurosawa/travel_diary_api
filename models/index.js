module.exports = function(knex) {
    return {
        users: require("./users")(knex),
    };
};