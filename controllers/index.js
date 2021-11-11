const express = require("express");

const router = express.Router();

module.exports = (models) => {
    const testAPI = (req, res) => {
        res.status(200).send("OK");
    }

    //request list
    router.get("/test", testAPI);
    return router;
};