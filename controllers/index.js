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

    const putUser = (req, res) => {
        const { username } = req.body;
        const sql_query = { username: username };
        models.users
            .create(sql_query)
            .then((user) => res.json(user))
            .catch((err) => res.status(400).send(err.message));
    }

    //request list
    router.get("/test", testAPI);
    router.get("/users", getUsers);
    router.get("/user/:username", getUser)
    router.put("/user", putUser)
    return router;
};