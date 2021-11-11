const moment = require("moment");

const Dialy = function(dbDiary) {
    this.id = dbDiary.id;
    this.userId = dbDiary.userId;
    this.diary = dbDiary.diary;
    this.updatedAt = new Date(dbDiary.updatedAt);
    this.createdAt = new Date(dbDiary.createdAt);
};

module.exports = (knex) => {
    return {
        create: require("./create")(knex, Dialy),
        list: require("./list")(knex, Dialy),
        get: require("./get")(knex, Dialy),
        put: require("./put")(knex, Dialy),
        delete: require("./delete")(knex, Dialy),
    };
};