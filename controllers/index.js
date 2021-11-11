const express = require("express");

const router = express.Router();

module.exports = (models) => {
    const testAPI = (req, res) => {
        res.status(200).send("OK");
    }

    const getUsers = (req, res) => {
        models.users
            .list()
            .then((users) => users.map((user) => user.serialize()))
            .then((users) => res.json(users))
            .catch((err) => res.status(400).send(err.message));
    }

    const getUser = (req, res) => {
        const { username } = req.params;
        models.users
            .get({ username })
            .then((user) => res.json(user))
            .catch((err) => res.status(404).send(err.message));
    }

    const postUser = (req, res) => {
        const { username } = req.body;
        const sql_query = { username: username };
        models.users
            .create(sql_query)
            .then((user) => res.json(user))
            .catch((err) => res.status(400).send(err.message));
    }

    const getDiaries = (req, res) => {
        models.diaries
            .list()
            .then((diaries) => res.json(diaries))
            .catch((err) => res.status(400).send(err.message));
    }

    const getDiariesUser = (req, res) => {
        const { username } = req.params;
        models.diaries
            .get(req.params)
            .then((diaries) => res.json(diaries))
            .catch((err) => res.status(400).send(err.message));
    }

    const postDiary = (req, res) => {
        const { userId, diary } = req.body;
        const sql_query = { userId: userId, diary: diary };
        models.diaries
            .create(sql_query)
            .then((diary) => res.json(diary))
            .catch((err) => res.status(400).send(err.message));
    }

    const putDiary = (req, res) => {
        const { id, diary } = req.body;
        const sql_query = { id: id, diary: diary };
        models.diaries
            .put(sql_query)
            .then((diary) => res.json(diary))
            .catch((err) => res.status(400).send(err.message));
    }

    const deleteDiary = (req, res) => {
        const { id } = req.body;
        const sql_query = { id: id };
        models.diaries
            .delete(sql_query)
            .then(() => res.send("del"))
            .catch((err) => res.status(400).send(err.message));
    }

    //request list
    router.get("/test", testAPI);
    router.get("/users", getUsers);
    router.get("/user/:username", getUser);
    router.post("/user", postUser);
    router.get("/diaries", getDiaries);
    router.post("/diary", postDiary);
    router.get("/diaries/:username", getDiariesUser);
    router.put("/diary", putDiary);
    router.delete("/diary", deleteDiary);
    return router;
};