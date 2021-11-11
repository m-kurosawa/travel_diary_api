module.exports = (knex, Diary) => {
    return (params) => {
        const { username } = params;
        return knex("diaries")
            .join('users', 'diaries.userId', '=', 'users.id')
            .where({ 'users.username': username.toLowerCase() })
            .select({
                id: "diaries.id",
                userId: "users.id",
                diary: "diaries.diary",
                updatedAt: "diaries.updatedAt",
                createdAt: "diaries.createdAt",
            })
            .then((diaries) => {
                if (diaries.length) return diaries.map((diary) => new Diary(diary));

                throw new Error(`Error finding diary by ${username}`);
            });
    };
};