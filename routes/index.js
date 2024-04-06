const express = require("express");
const megamenu = require("../constant/catalog");
const router = express.Router();

router.get("/catalog", (req, res) => {
    res.send({ data: megamenu })
})
module.exports = router