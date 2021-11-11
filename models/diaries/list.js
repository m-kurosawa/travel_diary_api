module.exports = (knex, Diary) => {
    return (params) => {
        return knex("diaries")
            .join('users', 'diaries.userId', '=', 'users.id')
            .select({
                id: "diaries.id",
                userId: "users.id",
                diary: "diaries.diary",
                updatedAt: "diaries.updatedAt",
                createdAt: "diaries.createdAt",
            })
            .then((diaries) => {
                if (diaries.length) return diaries.map((diary) => new Diary(diary));

                throw new Error(`Error finding diary`);
            });
    };
};