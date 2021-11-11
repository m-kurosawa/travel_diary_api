const express = require("express");

const router = express.Router();

module.exports = (models) => {
    const testAPI = (req, res) => {
        res.status(200).send("OK");
    }

    const getUser = (req, res) => {
        models.users
            .list()
            .then((users) => users.map((user) => user.serialize()))
            .then((users) => res.json(users))
            .catch((err) => res.status(400).send(err.message));
    }

    //request list
    router.get("/test", testAPI);
    router.get("/users", getUser);
    return router;
};